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
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.base.model.JsonDataGrid;
import com.seaboxdata.core.util.common.DateTime;
import com.seaboxdata.core.util.common.JsonUtil;
import com.seaboxdata.core.util.common.QRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;


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
        List<Map<String, Object>> retList = dao.getPuChengHistoricCultureInfo();
//        if(null != retList && !retList.isEmpty()){
//            retStr = JsonUtil.serialize(retList);
//        }
//        retStr = PREFIX_CHAR.concat("rows:").concat(retStr).concat(SUFFIX_CHAR);

        String dateTimeFormat = "2019-05-16 09:18";

        retStr = new JsonDataGrid(retList.size(), retList).toJson(dateTimeFormat);
        return  retStr;
    }


    private final static String  PREFIX_CHAR = "[";

    private final static String  SUFFIX_CHAR = "]";



}