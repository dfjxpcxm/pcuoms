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
package com.seaboxdata.sysmng.puchengachievement.puchengindustincm;


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
@Service("puChengIndustIncmService")
public class PuChengIndustIncmServiceImpl extends SysBaseService<PuChengIndustIncmDO> implements IPuChengIndustIncmService {

    @Autowired
    public PuChengIndustIncmServiceImpl() {
        BaseTable = "t03_indust_incm";
        BaseComment = "t03_indust_incm";
        PrimaryKey = "imcome_id";
        NameKey = "imcome_id";
    }


   @Autowired
    private IPuChengIndustIncmDao<PuChengIndustIncmDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public List<Map<String, Object>> getBeautifulPCInfo() {
        return null;
    }


}