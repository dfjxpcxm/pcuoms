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
package com.seaboxdata.sysmng.gotopuchengmng.puchengsummarize;

import java.util.Date;


/**
 * sys_sign_info数据对象
 */
public class PuChengSummarizeDO implements java.io.Serializable {
	
    private static final long serialVersionUID = 1L;

    public PuChengSummarizeDO(){}

    public PuChengSummarizeDO(PuChengSummarizeDO u){
        setFunction_id(u.getFunction_id());
        setModule_id(u.getModule_id());
        setIndex_content(u.getIndex_content());
        setIndex_title(u.getIndex_title());
        setIndex_state(u.getIndex_state());
        setOrder_by(u.getOrder_by());
        setCre_time(u.getCre_time());
        setUpd_time(u.getUpd_time());
    }

    /**
     *
     */
    private Integer  function_id;
    /**
     *模块ID
     */
    private Integer  module_id;
    /**
     *模块名称
     */
    private String index_content;

    private String  index_title;
    private String  index_unit;
    /**
     *状态
     */
    private Integer index_state;

    private Integer pub_state;

    private Integer order_by;
    /**
     *cre_time
     */
    private Date  cre_time;
    /**
     *upd_time
     */
    private Date  upd_time;

    public Integer getFunction_id() {
        return function_id;
    }

    public void setFunction_id(Integer function_id) {
        this.function_id = function_id;
    }

    public Integer getModule_id() {
        return module_id;
    }

    public void setModule_id(Integer module_id) {
        this.module_id = module_id;
    }

    public String getIndex_content() {
        return index_content;
    }

    public void setIndex_content(String index_content) {
        this.index_content = index_content;
    }

    public String getIndex_title() {
        return index_title;
    }

    public void setIndex_title(String index_title) {
        this.index_title = index_title;
    }

    public String getIndex_unit() {
        return index_unit;
    }

    public void setIndex_unit(String index_unit) {
        this.index_unit = index_unit;
    }

    public Integer getIndex_state() {
        return index_state;
    }

    public void setIndex_state(Integer index_state) {
        this.index_state = index_state;
    }

    public Integer getPub_state() {
        return pub_state;
    }

    public void setPub_state(Integer pub_state) {
        this.pub_state = pub_state;
    }

    public Integer getOrder_by() {
        return order_by;
    }

    public void setOrder_by(Integer order_by) {
        this.order_by = order_by;
    }

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
}