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
package com.seaboxdata.sysmng.mainframemng.hometag;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import com.seaboxdata.core.util.common.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;


/**
 * sys_sign_info服务实现类
 */
@Transactional
@Service("homeTagMngService")
public class HomeTagMngServiceImpl extends SysBaseService<HomeTagMngDO> implements IHomeTagMngService {



    @Autowired
    public HomeTagMngServiceImpl(IHomeTagMngDao<HomeTagMngDO> dao) {
        BaseTable = "t01_home_tag";
        BaseComment = "t01_home_tag";
        PrimaryKey = "tag_id";
        NameKey = "tag_id";
    }



   @Autowired
    private IHomeTagMngDao<HomeTagMngDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }


    @Override
    public List<Map<String, Object>> getModuleInfo() {
        return dao.getModuleInfo();
    }

    @Override
    public void pubHomeTagInfoById(String sysid,String pub_state) {
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("tag_id",sysid);
        queryMap.put("pub_state",pub_state);
        dao.pubHomeTagInfoById(queryMap);
    }

    @Override
    public String getMainframeHomeTagInfo(String flag) {
        String retStr = "" ;
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("flag",flag);
        List<Map<String, Object>>  retList  = dao.getMainframeHomeTagInfo(queryMap);
        if(null != retList && !retList.isEmpty()){
            retStr = this.getMainframeHomeTagStrInfo(retList);
        }
        return  retStr;
    }

    @Override
    public HomeTagMngDO getColor() {
        return dao.getColor();
    }


    /*
     * 返回主页标签内容
     *
     *  <a class="tags" target="_blank" style="color:#d35745;" href="#">福建北大门</a>
     *  <a class="tags" target="_blank"   href="#">中国丹桂之乡</a>
     */
    public String getMainframeHomeTagStrInfo(List<Map<String,Object>> retList){
        String content = "";
        String style = "";
        StringBuffer sb = new StringBuffer();
        for(Map<String,Object> mp :retList){
            content = mp.get("tag_content").toString();
            style = mp.get("tag_style").toString();
            if("null".equals(style)){
                sb.append("  <a class=\"tags\" target=\"_blank\"  href=\"#\">"+content+"</a>");
            }else{
                sb.append("  <a class=\"tags\" target=\"_blank\" "+style+"  href=\"#\">"+content+"</a>");
            }


        }
        String retStr = sb.toString();
        System.out.printf(""+retStr);
        return retStr;
    }
}