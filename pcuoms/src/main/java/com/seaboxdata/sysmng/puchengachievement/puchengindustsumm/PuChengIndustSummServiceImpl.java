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
package com.seaboxdata.sysmng.puchengachievement.puchengindustsumm;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;


/**
 * sys_sign_info服务实现类
 */
@Transactional
@Service("puChengIndustSummService")
public class PuChengIndustSummServiceImpl extends SysBaseService<PuChengIndustSummDO> implements IPuChengIndustSummService {

    @Autowired
    public PuChengIndustSummServiceImpl() {
        BaseTable = "t03_indust_sumy";
        BaseComment = "t03_indust_sumy";
        PrimaryKey = "summary_id";
        NameKey = "summary_id";
    }


   @Autowired
    private IPuChengIndustSummDao<PuChengIndustSummDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }



    @Override
    public String getPCIndustSummyInfo() {
        String retStr ="";
        List<Map<String, Object>> retList = dao.getPCIndustSummyInfo();
        if(null != retList && !retList.isEmpty()){
            retStr = getPCIndustSummyInfoString(retList);
        }
        return  retStr;
    }




    /*
     * 返回产业概述内容
     */
    public String getPCIndustSummyInfoString(List<Map<String,Object>> retList){
        String titile = "";
        String content = "";
        String utitile = "";
        StringBuffer sb = new StringBuffer();
        for(Map<String,Object> mp :retList){
            content  = mp.get("index_content").toString();
            sb.append(""+content+"");

        }
        String retStr = sb.toString();
        return retStr;
    }
}