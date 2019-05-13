/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user数据对象</h3>
 * <h3>日期 : 2018-04-13</h3>
 * <h3>版权 : Copyright (C) 北京东方金信科技有限公司</h3>
 * 
 * <p>
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
package com.seaboxdata.sysmng.gotopuchengmng;

import java.util.Date;


/**
 * sys_sign_info数据对象
 */
public class GotoPuChengMngDO implements java.io.Serializable {
	
    private static final long serialVersionUID = 1L;

    public GotoPuChengMngDO(){}

    public GotoPuChengMngDO(GotoPuChengMngDO u){
        setModule_id(u.getModule_id());
        setModule_name(u.getModule_name());
        setFunction_name(u.getFunction_name());
        setUrl_address(u.getUrl_address());
        setModule_state(u.getModule_state());
        setCre_time(u.getCre_time());
        setUpd_time(u.getUpd_time());

    }


    /**
     *模块ID
     */
    private Integer  module_id;
    /**
     *模块名称
     */
    private String  module_name;

    /**
     *功能名称
     */
    private String  function_name;
    /**
     *状态
     */
    private Integer  module_state;

    private Integer pub_state;


    private String url_address;
    /**
     *cre_time
     */
    private Date  cre_time;


    /**
     *upd_time
     */
    private Date  upd_time;



    public Date getCre_time() {
        return cre_time;
    }

    public void setCre_time(Date cre_time) {
        this.cre_time = cre_time;
    }

    public Date getUpd_time() {
        return upd_time;
    }

    public void setUpd_time(Date upd_time) {
        this.upd_time = upd_time;
    }

    public Integer getModule_id() {
        return module_id;
    }

    public void setModule_id(Integer module_id) {
        this.module_id = module_id;
    }

    public String getModule_name() {
        return module_name;
    }

    public void setModule_name(String module_name) {
        this.module_name = module_name;
    }

    public String getFunction_name() {
        return function_name;
    }

    public void setFunction_name(String function_name) {
        this.function_name = function_name;
    }

    public Integer getModule_state() {
        return module_state;
    }

    public void setModule_state(Integer module_state) {
        this.module_state = module_state;
    }

    public Integer getPub_state() {
        return pub_state;
    }

    public void setPub_state(Integer pub_state) {
        this.pub_state = pub_state;
    }

    public String getUrl_address() {
        return url_address;
    }

    public void setUrl_address(String url_address) {
        this.url_address = url_address;
    }
}