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
package com.seaboxdata.sysmng.gotopuchengmng.puchengsummarize;


import com.seaboxdata.core.base.ISysBaseDao;
import com.seaboxdata.core.base.SysBaseService;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.FileUtil;
import com.seaboxdata.core.util.common.DateTime;
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
@Service("puChenSummarizeService")
public class PuChengSummarizeServiceImpl extends SysBaseService<PuChengSummarizeDO> implements IPuChengSummarizeService {

    @Autowired
    public PuChengSummarizeServiceImpl() {
        BaseTable = "t02_basic_facts";
        BaseComment = "t02_basic_facts";
        PrimaryKey = "function_id";
        NameKey = "function_id";
    }


   @Autowired
    private IPuChengSummarizeDao<PuChengSummarizeDO> dao;

    @Override
    public ISysBaseDao getDao(){
        return dao;
    }

    @Override
    public List<Map<String, Object>> getBeautifulPCInfo() {
        return null;
    }

    @Override
    public DataStore save(PuChengSummarizeDO entity) {


        //如果编号为空,新增实体对象,否则更新实体对象
        Integer val = entity.getFunction_id();
        int c = 0;
        Date now = DateTime.Now().getTime();
        //名称不能重复
      /*  if(exist("dep_name", entity.getDep_name(), val))
            return ActionMsg.setError("名称已存在，请换一个");*/
        if(val == null || val == 0) {
            entity.setCre_time( now );  //新增时间
            entity.setUpd_time( now );  //修改时间

            c = dao.insert(entity);
        }else {
            entity.setUpd_time( now );  //修改时间

            c = dao.update(entity);
        }
        if(c == 0)
            return ActionMsg.setError("操作失败");
        ActionMsg.setValue(entity);
        return ActionMsg.setOk("操作成功");
    }
}