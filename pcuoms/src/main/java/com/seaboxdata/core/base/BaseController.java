package com.seaboxdata.core.base;

import com.seaboxdata.core.util.FileUtil;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UrlPathHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;

/**
 * 通用展示控制类
 * Created by cc on 2018/7/30.
 */
public class BaseController {
    public HttpServletRequest request;
    public HttpServletResponse response;
    protected UrlPathHelper urlPathHelper; // 路径助手

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

            modelAndView.addObject("host", url);

        }
    }

}
