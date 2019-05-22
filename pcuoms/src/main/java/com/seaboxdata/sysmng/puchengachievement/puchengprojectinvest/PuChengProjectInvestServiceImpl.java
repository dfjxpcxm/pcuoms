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
package com.seaboxdata.sysmng.puchengachievement.puchengprojectinvest;


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
@Service("puChengProjectInvestService")
public class PuChengProjectInvestServiceImpl extends SysBaseService<PuChengProjectInvestDO> implements IPuChengProjectInvestService {

    @Autowired
    public PuChengProjectInvestServiceImpl() {
        BaseTable = "t03_project_invest";
        BaseComment = "t03_project_invest";
        PrimaryKey = "invest_id";
        NameKey = "invest_id";
    }


   @Autowired
    private IPuChengProjectInvestDao<PuChengProjectInvestDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public void pubInfoById(String sysid) {
        dao.pubInfoById(sysid);
    }
    @Override
    public String getPCProjectInvestIndexInfo() {
        String retStr = "" ;
        List<Map<String, Object>> retList = dao.getPCProjectInvestIndexInfo();
        if(null != retList && !retList.isEmpty()){
            retStr = JsonUtil.serialize(retList);
        }
        return  retStr;
    }


    @Override
    public String getPCProjectInvestImgInfo() {
        String retStr = "" ;
        List<Map<String, Object>> retList = dao.getPCProjectInvestImgInfo();
        if(null != retList && !retList.isEmpty()){
            retStr = JsonUtil.serialize(retList);
        }
        return  retStr;
    }

}