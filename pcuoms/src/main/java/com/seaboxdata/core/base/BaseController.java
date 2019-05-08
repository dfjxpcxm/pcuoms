package com.seaboxdata.core.base;

import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.base.model.JsonDataGrid;
import com.seaboxdata.core.base.model.PageBounds;
import com.seaboxdata.core.util.FileUtil;
import com.seaboxdata.core.util.common.JsonUtil;
import com.seaboxdata.core.util.common.QCommon;
import com.seaboxdata.core.util.common.QRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UrlPathHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 通用展示控制类
 * Created by cc on 2018/7/30.
 */
public abstract class BaseController<T> {

    private final Logger logger = LoggerFactory.getLogger(getClass());
    public HttpServletRequest request;
    public HttpServletResponse response;
    protected UrlPathHelper urlPathHelper; // 路径助手


    public Map<String, Object> urlMap;


    public DataStore ActionMsg;


    // <editor-fold defaultstate="collapsed" desc="自定义方法">

    public BaseController() {
        ActionMsg = new DataStore();
        urlMap = new HashMap<String, Object>();
    }

    @PostMapping(value = "/getdata/{t}")
    public void getdata(String t) throws Exception {
        String result = getJson(t);
        setWebCache(response);
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(result);
        response.getWriter().close();
    }

    /**
     * 获取js代码
     *
     * @return
     * @throws IOException
     */
    private String getJson(String path) throws IOException {
        String rootPath = request.getSession().getServletContext()
                .getRealPath("/");
        String jsonPath = rootPath + "/static/data/" + path +".json";
        StringBuffer buffer = request.getRequestURL();
        File file = new File(jsonPath);
        String result;
        if (file.exists()) {
            result = FileUtil.loadStringFromFile(file, "utf-8");
        } else {
            result = "alert('请求数据不存在！')";
        }
        return result;
    }

    /**
     * 设置客户端缓存参数
     *
     * @param response
     */
    private void setWebCache(HttpServletResponse response) {
        // 将过期日期设置为一个 未来时间
        // response.setHeader("Expires", "Wed, 09 Jan 2013 23:55:10 GMT");
        // 设置 HTTP/1.1 no-cache 头 ,三天更新一次缓存
        response.setHeader("Cache-Control", "public, max-age=259200");

        // 设置标准 HTTP/1.0 no-cache header. ,三天更新一次缓存
        response.setHeader("Pragma", "public, max-age=259200");
    }



    public void before(HttpServletRequest request, HttpServletResponse response,
                             Object handler){
        this.urlPathHelper = new UrlPathHelper();
        this.request = request;
        this.response = response;
    }
    public void after(HttpServletRequest request,
                            HttpServletResponse response, Object handler,
                            ModelAndView modelAndView) {
        if (modelAndView == null)
            return;
        String viewName = modelAndView.getViewName();

        if (viewName == null || "".equals(viewName)) {
            //modelAndView.clear();
        } else if (viewName.startsWith("redirect:")) {
            // modelAndView.addAllObjects(_ASSIGN_);
        } else {
            String url = request.getScheme() + "://" + request.getServerName()
                    + ":" + request.getServerPort() + request.getContextPath();
            String actionUrl = urlPathHelper.getLookupPathForRequest(request);
            int idx = actionUrl.lastIndexOf("/");
            actionUrl = actionUrl.substring(0, idx);
            Map<String, Object> G = new HashMap<String, Object>();
            G.put("host", url);
            G.put("year", new Date().getYear() + 1900);
            G.put("serverUrl", url + actionUrl);
            G.put("editUrl", url + actionUrl + "/edit");
//            G.put("objName", getBaseService().getBaseComment());
 //           G.put("idField", getBaseService().getPrimaryKey());
            modelAndView.addObject("G", G);
        }
    }





    protected String view() {
        return "page" + urlPathHelper.getLookupPathForRequest(request);
    }




    /**
     * 输出DataGrid 返回对象
     *
     * @param count
     * @param list
     * @return
     */
    protected Map<String, Object> showDataStoreMap(int count, List list) {
        Map<String, Object> result = new HashMap<String, Object>(2);
        result.put("total", list.size());
        result.put("rows", list);

        return result;
    }

    /**
     * 输出请求成功处理对象
     *
     * @param msg
     * @return
     */
    protected Map<String, Object> showSuccess(String msg) {
        Map<String, Object> result = new HashMap<String, Object>(2);
        result.put("code", 1);
        result.put("msg", msg);

        return result;
    }

    /**
     * 输出请求失败处理对象
     *
     * @param msg
     * @return
     */
    protected Map<String, Object> showError(String msg) {
        Map<String, Object> result = new HashMap<String, Object>(2);
        result.put("code", -1);
        result.put("msg", msg);

        return result;
    }

    /**
     * 输出请求成功处理对象
     *
     * @param code 1成功
     * @param msg
     * @return
     */
    public Map<String, Object> showDataStoreMap(int code, String msg) {
        Map<String, Object> result = new HashMap<String, Object>(2);
        result.put("code", code);
        result.put("msg", msg);

        return result;
    }

    public Map<String, Object> getQueryMap(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        Enumeration<String> names = request.getParameterNames();
        String key;
        while (names.hasMoreElements()) {
            key = names.nextElement();
            if (key.startsWith("IN_")) {
                String[] val = request.getParameterValues(key);
                for (int i = 0; i < val.length; i++) {
                    val[i] = QCommon.urlDecode(val[i]);
                }
                map.put(key, val);
            } else {
                String val = request.getParameter(key);
                val = QCommon.urlDecode(val);
                map.put(key, val);
            }
        }
        map.putAll(urlMap);
        return map;
    }

    public Map<String, Object> getQueryMap(HttpServletRequest request,
                                           String columnNames, String tableName, String whereStr,
                                           String orderStr) {
        Map<String, Object> map = getQueryMap(request);
        map.put("_sql_select", columnNames);
        map.put("_sql_table", tableName);
        map.put("_sql_where", whereStr);
        map.put("_sql_order", orderStr);

        return map;
    }

    public void addQueryMap(String url) {
        String[] params = url.split("&");
        for (int i = 0; i < params.length; i++) {
            String[] p = params[i].split("=");
            if (p.length == 2) {
                urlMap.put(p[0], p[1]);
            }
        }
    }

    public PageBounds getQueryPager() {
        int pageSize = QRequest.getInteger(request, "pageSize", 10); // 获取datagrid传来的行数
        //每页显示条数
        int pageNo = QRequest.getInteger(request, "page", 1); // 获取datagrid传来的页码
        //当前页
        PageBounds pager = new PageBounds(pageNo, pageSize);
        return pager;
    }

    public Object getQuery(String url) {
        addQueryMap(url);
        return getData("page");
    }

    public void write(String data) {
        try {
            response.setHeader("content-type", "text/html;charset=UTF-8");
            OutputStream out = response.getOutputStream();
            out.write(data.getBytes("UTF-8"));
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public com.seaboxdata.core.base.ISysBaseService<T> getBaseService() {
        return null;
    }



    // <editor-fold desc="保存Action">
    @RequestMapping(value = "/save")
    @ResponseBody
    public DataStore saveAction(T model) {
        return save(model);

    }

    public DataStore saveBefore(T model) {
        return ActionMsg.setSuceess("操作成功");
    }

    public DataStore saveAfter(T model) {
        return ActionMsg.setSuceess("操作成功");
    }


    public DataStore save(T model) {
        return getBaseService().save(model);
    }


    // <editor-fold defaultstate="collapsed" desc="通用删除Action">
    @RequestMapping(value = "/delete")
    @ResponseBody
    public DataStore deleteAction() {
        String id = rstr(getBaseService().getPrimaryKey());
        return delete(id);

    }

    public DataStore delBefore(String id) {
        return ActionMsg.setSuceess("操作成功");
    }

    public DataStore delAfter(String id) {
        return ActionMsg.setSuceess("操作成功");
    }

    public DataStore delete(String sysid) {

        return getBaseService().delete(sysid);
    }

    // </editor-fold>

    // <editor-fold desc="通用查询Action">

    public String getTableName() {
        String tableName = rstr("table");
        // 如果表名为空则取内置表名（视图）
        if (tableName.length() == 0) {
            tableName = getBaseService().getBaseView();
        }
        return tableName;
    }

    public String getPrimaryKey() {
        String primaryKey = rstr("pkey");
        // 如果主键为空则取内置主键
        if (primaryKey.length() == 0) {
            primaryKey = getBaseService().getPrimaryKey();
        }
        return primaryKey;
    }


    /**
     * 获取选择字段
     *
     * @return
     */
    public String getFieldShow() {
        String show = rstr("fieldShow");
        if (show.length() == 0)
            show = "*";
        return show;
    }

    /**
     * 获取排序字段
     */
    public String getFieldOrder() {
        String sort = rstr("sort"); // 例sort=?? desc
        String order = rstr("order");
        if (sort.length() == 0) {
            //sort = getBaseService().getPrimaryKey();
        } else {
            sort += " " + order;
        }

        return sort;
    }

    /**
     * 返回过滤条件
     *
     * @return
     */
    public String getFilterCondition() {
        return rstr("filter");
    }

    @RequestMapping(value = "/getObj", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getObj() throws Exception {

        String sysid = QRequest.getString(request, getBaseService()
                .getPrimaryKey());
        Map<String, Object> obj = getBaseService().selectMap(sysid);
        return obj;
    }

    @RequestMapping(value = "/getList")
    @ResponseBody
    public Object getList() throws Exception {
        return getData("page");
    }

    public String getCondition() {
        return "";
    }
    // </editor-fold>

    // <editor-fold desc="上传文件Action">

    /**
     * 获取数据集合
     *
     * @return
     */
    @RequestMapping(value = "/getData")
    @ResponseBody
    public Object getData(String json) {
        String str = "[]";
        if (json == null)
            json = "data";

        int pageSize = QRequest.getInteger(request, "pageSize", 10); // 获取datagrid传来的行数
        // //每页显示条数
        int pageNo = QRequest.getInteger(request, "page", 1); // 获取datagrid传来的页码

        if (json.equals("obj")) {
            pageSize = 1;
        }

        // 表名
        String tableName = getTableName();
        // 主键
        String primaryKey = getPrimaryKey();
        // 排序处理
        String fieldOrder = getFieldOrder();

        String whereStr = getFilterCondition(); // 数据必须受限
        String fieldShow = getFieldShow();

        // 日期格式
        String dateTimeFormat = QRequest.getString(request, "dateTimeFormat",
                "yyyy-MM-dd HH:mm"); // 例：dateTimeFormat=yyyy-MM-dd HH:mm

        response.setContentType(QRequest.getResponseType("json")); // 输出JS文件

        // 默认O条数据
        int recordCount = 0;

        Map<String, Object> queryMap = getQueryMap(request, fieldShow,
                tableName, whereStr, fieldOrder);
        PageBounds pager = new PageBounds(pageNo, pageSize);

        List<Map<String, Object>> dt;
        if (json.equals("page")) {
            dt = getBaseService().select(queryMap, pager);
            recordCount = pager.getTotal();
        } else {
            dt = getBaseService().select(queryMap);
            recordCount = dt.size();
        }

        switch (json) {
            case "data": // 全表格[{}]
                str = new JsonDataGrid(recordCount, dt).toDataJson(dateTimeFormat);
                break;
            case "dataJs":
                String jsName = QRequest.getString(request, "name");
                if (jsName.length() == 0)
                    jsName = getBaseService().getBaseTable();
                response.setContentType("application/x-javascript; charset=UTF-8"); // 输出JS文件
                str = MessageFormat.format("var _dataStore[\"{0}\"] = {1} ;",
                        jsName, new JsonDataGrid(recordCount, dt).toDataJson(dateTimeFormat));
                break;
            case "page": // 分页表格{total:0,rows:[]}
                str = new JsonDataGrid(recordCount, dt).toJson(dateTimeFormat);
                break;
            case "tree": // 树下拉[{id:0,text:"",children:[]}]
                // fieldTree:id列名,text列名,parentid列名,开始节点id
                String fieldTree = QRequest.getString(request, "fieldTree");
                str = new JsonDataGrid(recordCount, dt).toTreeJson(fieldTree);
                break;

            case "obj":
                str = new JsonDataGrid(recordCount, dt).toObjJson();
                break;
            case "combo":
                str = new JsonDataGrid(recordCount, dt).toComboJson(fieldShow);
                break;
            case "store": // 数据仓库
                response.setContentType("application/x-javascript; charset=UTF-8"); // 输出JS文件
                String storeName = QRequest.getString(request, "name");
                if (storeName.length() == 0)
                    storeName = getBaseService().getBaseTable();
                str = new JsonDataGrid(recordCount, dt).writeDataStoreJs(fieldShow,
                        storeName);
                break;
        }
        try {
            response.getWriter().print(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    // </editor-fold>

    public Object getMapper(String mapper) {
        //int pageSize = QRequest.getInteger(request, "rows", 99999); // 获取datagrid传来的行数
        //int pageNo = QRequest.getInteger(request, "page", 1); // 获取datagrid传来的页码

        // 表名
        String tableName = getTableName();
        // 主键
        String primaryKey = getPrimaryKey();
        // 排序处理
        String fieldOrder = getFieldOrder();
        String whereStr = getFilterCondition(); // 数据必须受限
        String fieldShow = getFieldShow();

        response.setContentType(QRequest.getResponseType("json")); // 输出JS文件
        Map<String, Object> queryMap = getQueryMap(request, fieldShow,
                tableName, whereStr, fieldOrder);
        //PageBounds pager = new PageBounds(pageNo, pageSize);

        List<Map<String, Object>> dt = getBaseService().selectMapper(mapper, queryMap);
        int recordCount = dt != null ? dt.size() : 0;
        String str = new JsonDataGrid(recordCount, dt).toDataJson();

        try {
            response.getWriter().print(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }



    // <editor-fold desc="获取参数">

    public String val(Object obj) {
        if (obj == null)
            return "";
        return obj.toString();
    }

    public String val(Map<String, Object> m, String key) {
        Object obj = m.get(key);
        if (obj == null)
            return "";
        return obj.toString();
    }

    public String rstr(String name) {
        return QRequest.getString(request, name);
    }

    public String rstr(String name, String defValue) {
        return QRequest.getString(request, name, defValue);
    }

    public Integer rint(String name) {
        return QRequest.getInteger(request, name);
    }

    public Integer rint(String name, Integer defValue) {
        return QRequest.getInteger(request, name, defValue);
    }

    public String getUrl() {
        String url = request.getScheme() + "://" + request.getServerName()
                + ":" + request.getServerPort() + request.getContextPath();
        return url;
    }
}
