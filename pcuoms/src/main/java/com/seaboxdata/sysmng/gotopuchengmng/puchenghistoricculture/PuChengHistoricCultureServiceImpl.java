/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user服务实现类</h3>
 * <h3>日期 : 2018-04-13</h3>
 * <h3>版权 : Copyright (C) 北京东方金信科技有限公司</h3>
 *
 * <p>
 *
 * @author 你自己的姓名 mazong@seaboxdata.com
 * @version <b>v1.0.0</b>
 *
 * <b>修改历史:</b>
 * -------------------------------------------
 * 修改人 修改日期 修改描述
 * -------------------------------------------
 *
 *
 * </p>
 */
package com.seaboxdata.sysmng.gotopuchengmng.puchenghistoricculture;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import com.seaboxdata.core.util.common.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;


/**
 * sys_sign_info服务实现类
 */
@Transactional
@Service("puChengHistoricCultureService")
public class PuChengHistoricCultureServiceImpl extends SysBaseService<PuChengHistoricCultureDO> implements IPuChengHistoricCultureService {

    @Autowired
    public PuChengHistoricCultureServiceImpl() {
        BaseTable = "t02_his_cult";
        BaseComment = "t02_his_cult";
        PrimaryKey = "his_id";
        NameKey = "his_id";
    }


    @Autowired
    private IPuChengHistoricCultureDao<PuChengHistoricCultureDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public String getPuChengHistoricCultureInfo() {
        String retStr = "" ;
        String hcStr = "";
        String gcStr = "" ;
        List<Map<String, Object>> retList = dao.getPuChengHistoricCultureInfo();
        List<Map<String, Object>> gcList = dao.getPuChengGeographCultureInfo();
        if(null != retList && !retList.isEmpty()){
            Map<String,List<Map<String, Object>>> dataMap = transDataCollection(retList);
            hcStr = getBeautifullPuChengStrInfo(dataMap);
            if(null != gcList && !gcList.isEmpty()){
                Map<String,List<Map<String, Object>>> gcDataMap = transDataCollection(gcList);
                gcStr = getBeautifullPuChengStrInfo(gcDataMap);
            }
        }
        retStr = PREFIX_CHAR.concat(PREFIX_CHAR).concat(hcStr).concat(SUFFIX_CHAR).concat(",").concat(PREFIX_CHAR).concat(gcStr).concat(SUFFIX_CHAR).concat(SUFFIX_CHAR);
        return  retStr;
    }

    public String getBeautifullPuChengStrInfo(Map<String,List<Map<String, Object>>> dataMap){
        Set<Map.Entry<String,List<Map<String, Object>>>> entries = dataMap.entrySet();
        StringBuffer sb = new StringBuffer();
        int len;
        String id = "";
        String title = "";
        String content = "";
        String url = "";
        for(Map.Entry<String,List<Map<String, Object>>> entry:entries ){
            System.out.println(entry.getKey()+":"+entry.getValue());
            List<Map<String, Object>> lst = entry.getValue() ;
            len = lst.size();
            int i = 0;
            sb.append(" [ ");
            for(Map<String, Object> mp : lst){
                i++;
                id = mp.get("id").toString();
                title = mp.get("title").toString();
                content = mp.get("content").toString();
                url = mp.get("img_url").toString();
                if(i < len){
                    sb.append("  {title:\""+title+"\",img_url:\""+url+"\",content:\""+content+"\"},");
                }else{
                    sb.append("  {title:\""+title+"\",img_url:\""+url+"\",content:\""+content+"\"}");
                }
            }
            sb.append(" ] ,");
        }
        String retStr = sb.toString();
        retStr=retStr.endsWith(",")?retStr.substring(0,retStr.length()-1):retStr;
        return retStr;
    }





    public  Map<String,List<Map<String, Object>>>  transDataCollection(List<Map<String,Object>> retList){
        Map<String,List<Map<String, Object>>> map = new LinkedHashMap<>();
        for(Map<String, Object> m : retList) {
            if(map.containsKey(m.get("id").toString())){//相同ID
                List list = (List) map.get(m.get("id").toString());//取出存放在map中的数据
                list.add(m);
            }else{//map里面没有放入
                List list = new ArrayList();
                list.add(m);
                map.put(m.get("id").toString(), list); //存入map中
            }
        }
        return map;
    }




    private final static String  PREFIX_CHAR = "[";

    private final static String  SUFFIX_CHAR = "]";



}