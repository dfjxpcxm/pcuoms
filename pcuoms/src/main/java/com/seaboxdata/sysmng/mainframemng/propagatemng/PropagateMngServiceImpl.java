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
package com.seaboxdata.sysmng.mainframemng.propagatemng;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import com.seaboxdata.core.util.common.JsonUtil;
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
@Service("propagateMngService")
public class PropagateMngServiceImpl extends SysBaseService<PropagateMngDO> implements IPropagateMngService {



    @Autowired
    public PropagateMngServiceImpl(IPropagateMngDao<PropagateMngDO> dao) {
        BaseTable = "t01_propagate";
        BaseComment = "t01_propagate";
        PrimaryKey = "propagate_id";
        NameKey = "propagate_id";
    }



   @Autowired
    private IPropagateMngDao<PropagateMngDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }


    @Override
    public List<Map<String, Object>> getModuleInfo() {
        return dao.getModuleInfo();
    }

    @Override
    public void pubPropagateInfoById(String sysid,String pub_state) {
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("propagate_id",sysid);
        queryMap.put("pub_state",pub_state);
        dao.pubPropagateInfoById(queryMap);
    }

    @Override
    public String getMainframePropagateInfo(String flag) {
        String retStr = "" ;
        Map<String, Object> queryMap = new HashMap<>();
        queryMap.put("flag",flag);
        List<Map<String, Object>>  retList  = dao.getMainframePropagateInfo(queryMap);
        if(null != retList && !retList.isEmpty()){
            retStr = JsonUtil.serialize(retList);
        }
        return  retStr;
    }
}