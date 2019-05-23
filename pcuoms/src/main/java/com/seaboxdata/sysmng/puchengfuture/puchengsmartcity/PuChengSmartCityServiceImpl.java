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
package com.seaboxdata.sysmng.puchengfuture.puchengsmartcity;


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
@Service("puChengSmartCityService")
public class PuChengSmartCityServiceImpl extends SysBaseService<PuChengSmartCityDO> implements IPuChengSmartCityService {

    @Autowired
    public PuChengSmartCityServiceImpl() {
        BaseTable = "t04_live_culture";
        BaseComment = "t04_live_culture";
        PrimaryKey = "culture_id";
        NameKey = "culture_id";
    }


   @Autowired
    private IPuChengSmartCityDao<PuChengSmartCityDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public void pubInfoById(String sysid) {
        dao.pubInfoById(sysid);
    }

    @Override
    public List<Map<String, Object>> getLivingCultureInfoById(String id) {
        return dao.getLivingCultureInfoById(id);
    }

    @Override
    public String getPCLivingCultInfo() {
        String retStr = "" ;
        List<Map<String, Object>> retList = dao.getPCLivingCultInfo();
        if(null != retList && !retList.isEmpty()){
            retStr = JsonUtil.serialize(retList);
        }
        return  retStr;
    }
}