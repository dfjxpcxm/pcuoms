/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user请求类</h3>
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
package com.seaboxdata.sysmng.gotopuchengmng.puchenghumangeog;


import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.FileUtil;
import com.seaboxdata.sysmng.ModuleId;
import com.seaboxdata.sysmng.gotopuchengmng.puchengruraltourism.PuChengRuralTourismDO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * 人文地理
 *
 * @author
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/puChengHumanGeog")
public class PuChengHumanGeogController extends SysBaseController<PuChengHumanGeogDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "puChengHumanGeogService")
    private IPuChengHumanGeogService puChenHumanGeogService;

    @Override
    public ISysBaseService<PuChengHumanGeogDO> getBaseService() {
        return puChenHumanGeogService;
    }

    @RequestMapping
    public String list(ModelMap model) {
        return "page/gotopc/humangeog/list";
    }

    @RequestMapping
    public String edit(ModelMap model) {
        return "page/gotopc/humangeog/edit";
    }

    @Override
    public DataStore save(PuChengHumanGeogDO entity) {
        String imgPath = FileUtil.getImgUploadPath(request);
        entity.setModule_id(ModuleId.HumanGeog);
        if (imgPath.length() > 0)
            entity.setImg_path(imgPath);
        ActionMsg = getBaseService().save(entity);
        if (ActionMsg.isError())
            return ActionMsg;

        return ActionMsg;
    }
    @RequestMapping(value ="/pubHumanGeogInfoById")
    @ResponseBody
    public DataStore pubInfoById(@RequestParam String  geograph_id) {
        puChenHumanGeogService.pubInfoById(geograph_id);
        DataStore  ds =  new DataStore ();
        return ds.setOk("操作成功");
    }

}