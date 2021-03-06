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
package com.seaboxdata.sysmng.puchengachievement.puchengprojectincm;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * sys_sign_info服务实现类
 */
@Transactional
@Service("puChengProjectIncmService")
public class PuChengProjectIncmServiceImpl extends SysBaseService<PuChengProjectIncmDO> implements IPuChengProjectIncmService {

    @Autowired
    public PuChengProjectIncmServiceImpl() {
        BaseTable = "t03_project_incm";
        BaseComment = "t03_project_incm";
        PrimaryKey = "imcome_id";
        NameKey = "imcome_id";
    }


   @Autowired
    private IPuChengProjectIncmDao<PuChengProjectIncmDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public void pubInfoById(String sysid,String pub_state) {
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("imcome_id",sysid);
        queryMap.put("pub_state",pub_state);
        dao.pubInfoById(queryMap);
    }

    @Override
    public String getPCProjectIncomeInfo(String flag) {
        String retStr = "";
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("flag",flag);
        List<Map<String,Object>> retList = dao.getPCProjectIncomeInfo(queryMap);
        if(null != retList && !retList.isEmpty()){
            retStr = getPCProjectIncomeString(retList);
        }
        return  retStr;
    }


    /*
     * 返回项目成果概述内容
     */
    public String getPCProjectIncomeString(List<Map<String,Object>> retList){
        String titile = "";
        String content = "";
        String utitile = "";
        StringBuffer sb = new StringBuffer();
        for(Map<String,Object> mp :retList){
            titile = mp.get("index_title").toString();
            content  = mp.get("index_content").toString();
            utitile  = mp.get("index_unit").toString();
            sb.append(" <li>");
            sb.append(" <div>");
            sb.append("  <p class=\"btm\">"+titile+"</p>");
            sb.append("  <p class=\"top\"><span class=\"blue font5 cc\">"+content+"</span><span class=\"blue font1\">"+utitile+"</span></p>");
            sb.append(" </div>");
            sb.append(" </li>");
        }
        String retStr = sb.toString();
        return retStr;
    }
}