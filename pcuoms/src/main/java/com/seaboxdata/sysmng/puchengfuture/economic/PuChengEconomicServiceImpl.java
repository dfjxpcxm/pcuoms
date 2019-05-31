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
package com.seaboxdata.sysmng.puchengfuture.economic;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import com.seaboxdata.core.util.common.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;


/**
 * sys_sign_info服务实现类
 */
@Transactional
@Service("puChengEconomicService")
public class PuChengEconomicServiceImpl extends SysBaseService<PuChengEconomicDO> implements IPuChengEconomicService {

    @Autowired
    public PuChengEconomicServiceImpl() {
        BaseTable = "t04_economic";
        BaseComment = "t04_economic";
        PrimaryKey = "economic_id";
        NameKey = "economic_id";
    }


   @Autowired
    private IPuChengEconomicDao<PuChengEconomicDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public void pubInfoById(String sysid) {
        dao.pubInfoById(sysid);
    }


    @Override
    public String getPCEconomicInfo() {
        String retStr = "" ;
        List<Map<String, Object>> retList = dao.getPCEconomicInfo();
        if(null != retList && !retList.isEmpty()){
            retStr = getEconomicInfoString(retList);
        }
        return  retStr;
    }


    /*
     * 返回浦城未来产业经济
     */
    public String getEconomicInfoString(List<Map<String,Object>> retList){
        String titile = "";
        String content = "";
        String img = "";
        StringBuffer sb = new StringBuffer();
        for(Map<String,Object> mp :retList){
            titile = mp.get("title").toString();
            content  = mp.get("content").toString();
            img  = mp.get("img_url").toString();
            sb.append(" <li>");
            sb.append("  <div><img src=\""+img+"\" /></div>");
            sb.append(" <div><h3>"+titile+"</h3></div>");
            sb.append(" <div class=\"msg\"><p>"+content+"</p></div>");
            sb.append(" </li>");
        }
        String retStr = sb.toString();
        return retStr;
    }
}