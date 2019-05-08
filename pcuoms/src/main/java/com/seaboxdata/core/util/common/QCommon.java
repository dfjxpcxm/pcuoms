/**
 * <h3>标题 : 通用辅助类库 </h3>
 * <h3>描述 : 字符串处理</h3>
 * <h3>日期 : 2014-03-23</h3>
 * <h3>版权 : Copyright (C) 海口鑫网计算机网络有限公司</h3>
 * 
 * <p>
 * @author admin admin@xinwing.com.cn
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


package com.seaboxdata.core.util.common;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.security.MessageDigest;
import java.util.Collection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 通用字符串帮助类
 * @author Administrator
 */
public class QCommon {
    
    static private final String NATIVE = "GBK";
    static private final String UNICODE = "ISO8859-1";

    public QCommon() {
    }

    /**
     * 格式化double值
     *
     * @param dblValue double值
     * @param strFormat 格式串("00000.000")
     * @return 返回格式串
     */
    public static String format(double dblValue, String strFormat) {
        java.text.DecimalFormat df = new java.text.DecimalFormat(strFormat);
        return df.format(dblValue);

    }

    /**
     * 格式化String值
     *
     * @param strValue double值
     * @param strFormat 格式串("00000.000")
     * @return 返回格式串
     */
    public static String format(String strValue, String strFormat) {
        java.text.DecimalFormat df = new java.text.DecimalFormat(strFormat);
        return df.format(strToDouble(strValue));
    }
    
    /**
     * Url编码
     * @param str
     * @return 
     */
    public static String urlEncode(String str) {
        if(isNullOrEmpty(str))
            return str;
        try {
            return java.net.URLEncoder.encode(str, "UTF-8");
        } catch (Exception ex) {
            return str;
        }
    }
    /**
     * Url解码
     * @param str
     * @return 
     */
    public static String urlDecode(String str) {
        if(isNullOrEmpty(str))
            return str;
        try {
           return java.net.URLDecoder.decode(str, "UTF-8"); 
        } catch (Exception ex) {
            return str;
        }
    }

    /**
     * 字符转换成double
     *
     * @param str 字符串值
     * @return double值
     */
    public static double strToDouble(String str) {
        String loghead = "TypeConver:str2float:";
        double ret = 0.00;
        try {
            boolean flag = (null == str);
            flag = flag || (1 >= str.trim().length());
            if (flag) {
                ret = 0.00;
            } else {
                ret = Double.parseDouble(str);
            }
        } catch (NumberFormatException e) {
            ret = 0.00;
            System.out.println(loghead + e.toString());
        }
        return ret;
    }

    /**
     * 判断字符串是否为空
     * @param str
     * @return
     */
    public static Boolean isNullOrEmpty(String str) {
        return (str == null || str.length() == 0);
    }
    /**
     * 判断字符串是否为空
     * @param str
     * @return
     */
    public static Boolean isNullOrWhiteSpace(String str){
        if (str == null)
            return true;
        return StringUtils.isWhitespace(str); 
    }
    
    /**
     * 清除开头指定字符串
     * @param str
     * @return
     */
    public static String trimStart(String str, String stripChars) {
        if(str == null)
            return "";
        return StringUtils.stripStart(str, stripChars);
    }
    /**
     * 清除结束指定字符串
     */
    public static String trimEnd(String str, String stripChars) {
        if(str == null)
            return "";
        return StringUtils.stripEnd(str, stripChars);
    }

    /**
     * 分割的字符串，转换成数组
     * 
     * @param separator
     * @param str
     * @return
     */
    public static String[] split(String str, String separator) {
            return StringUtils.split(str, separator);
    }
    
    /**
     * 连接数组，转换成字符串
     * 
     * @param separator
     * @param array
     * @return
     */
    public static String join(Object[] array, String separator) {
        return StringUtils.join(array, separator);
    }
    /**
     * 连接数组，转换成字符串
     * 
     * @param separator
     * @param array
     * @return
     */
    public static String join(Collection collection, String separator) {
        return StringUtils.join(collection, separator);
    }

  /**
    * 将字符串HASH成MD5
    * @param str
    * @return
    */
   public static String toMD5(String str){
           return DigestUtils.md5Hex(str);
   }
   /**
    * 将字符串HASH成SHA1
    * @param str
    * @return
    */
   public static String toSHA1(String str){
           return DigestUtils.sha1Hex(str);
   }
   /**
    * 将字符串Base64编码
    * @param str
    * @return
    */
   public static String toBase64(String str){
           byte[] b = Base64.encodeBase64(str.getBytes());
           return new String(b);
   }
   /**
    * 将字符串Base64解码
    * @param str
    * @return
    */
   public static String fromBase64(String str){
           byte[] b = Base64.decodeBase64(str.getBytes());
           return new String(b);
   }

    /**
     * 过滤字符串<,>,',",&
     *
     * @param value
     * @return
     */
    public static String filter(String value) {

        if (value == null || "".equals(value)) {
            return (null);
        }

        char content[] = new char[value.length()];
        value.getChars(0, value.length(), content, 0);
        StringBuilder result = new StringBuilder(content.length + 50);
        for (int i = 0; i < content.length; i++) {
            switch (content[i]) {
                case '<':
                    result.append("&lt;");
                    break;
                case '>':
                    result.append("&gt;");
                    break;
                case '&':
                    result.append("&amp;");
                    break;
                case '"':
                    result.append("&quot;");
                    break;
                case '\'':
                    result.append("&#39;");
                    break;
                default:
                    result.append(content[i]);
            }
        }
        return (result.toString());

    }

    /**
     * 将unicode字符转gbk为字符
     *
     *
     * @param s 源字串
     *
     * @return unicode的字串
     */
    public static String unicodeToNative(String s) {

        if (s == null) {
            return null;
        }
        String v = null;
        if (s != null) {
            try {
                byte[] bytes = s.getBytes(UNICODE);
                v = new String(bytes, NATIVE);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }
        return v;
    }

    /**
     * 将gbk字符转为unicode字符
     *
     * @param s 源字串
     *
     * @return unicode的字串
     */
    public static String nativeToUnicode(String s) {

        String v = null;
        if (s != null) {
            try {
                byte[] bytes = s.getBytes(NATIVE);
                v = new String(bytes, UNICODE);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return v;
    }


    /**
     * 转换成UTF-8编码
     *
     * @param s String
     * @return String
     */
    public static String toUTF8(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= 0 && c <= '\377') {
                sb.append(c);
            } else {
                byte b[];
                try {
                    b = Character.toString(c).getBytes("utf-8");
                } catch (Exception ex) {
                    System.out.println(ex);
                    b = new byte[0];
                }
                for (int j = 0; j < b.length; j++) {
                    int k = b[j];
                    if (k < 0) {
                        k += 256;
                    }
                    sb.append("%").append(Integer.toHexString(k).toUpperCase());
                }
            }
        }
        return sb.toString();
    }

    /**
     * 处理sql注入
     *
     * @param value
     * @return
     */
    public static String dealSqlInject(String value) {
        if (isNullOrEmpty(value)) {
            return value;
        }
        value = value.replaceAll("'", "‘");
        return value;
    }

    /**
     * 用于处理金额数据
     *
     * @param money
     * @return
     */
    public static String dealMoney(String money) {
        int index = money.indexOf(".");
        if (index >= money.length() || index == -1) {
            return money;
        }
        money = money.substring(0, index);
        while (money.length() < 15) {
            money = "0" + money;
        }
        return money;
    }

    /**
     * 判断字符串中是否包括字母
     *
     * @param param 需要判断的字符串
     *
     * @return
     */
    public static boolean isContainLetter(String param) {
        String regex = ".*[a-zA-Z]+.*";
        Matcher m = Pattern.compile(regex).matcher(param);
        return m.matches();
    }

    public static boolean isContainStr(String param) {

        String regex = ".*[a-zA-Z]+.*";
        Matcher m = Pattern.compile(regex).matcher(param);
        String regex2 = "0+.*";
        Matcher ma = Pattern.compile(regex2).matcher(param);
        return m.matches() || ma.matches();
    }

    public static String getSerialNumber(int orderNum, int nums) {
        String orderNumStr = String.valueOf(orderNum);
        int ordeLen = orderNumStr.length();
        int zeroNums = 0;
        String zeroStr = "";
        if (ordeLen > nums) {
            return null;
        }
        for (zeroNums = nums - ordeLen; zeroNums > 0; zeroNums--) {
            zeroStr = (new StringBuilder(String.valueOf(zeroStr))).append("0").toString();
        }

        orderNumStr = (new StringBuilder(String.valueOf(zeroStr))).append(orderNumStr).toString();
        return orderNumStr;
    }

    /**
     * Title : 获取随机数
     *
     * @param digits 随机数取值范围 默认为0123456789
     * @param length 随机数位数 默认为1位
     * @return
     */
    public static String getRandom(String digits, int length) {
        if (null == digits) {
            digits = "0123456789";
        }
        if (length <= 0) {
            length = 1;
        }
        char[] code = new char[length];
        String temp = "";
        for (int i = 0; i < length; i++) {
            code[i] = digits.charAt((int) (Math.random() * digits.length()));
            temp += "0";
        }
        String verifyCode = new String(code);

        if (verifyCode.equals(temp)) {
            verifyCode = getRandom(digits, length);
        }
        return verifyCode;
    }
    
    public static String getUUID(){
       return StringUtils.remove(java.util.UUID.randomUUID().toString(), '-');
    }
    
    /**
     * 长度校验及中文、英文、数字或下划线校验
     * @param s 待校验字符串
     * @param minLength 最小长度
     * @param maxLength 最大长度
     * @param isRequired 是否可以为空。true：可以为空， false：不可以为空
     * @return true  校验通过
     *          false 校验失败
     */
    public static boolean isChsEnNum(String s, int minLength, int maxLength,
            Boolean isRequired) {
        
        if (isRequired) {
            if (s != null && s.length() > maxLength) {
                return false;
            }
        } else {
            if (s == null || s.length() < minLength || s.length() > maxLength) {
                return false;
            }
        }
        Pattern chsEnNumPattern = Pattern.compile("^[0-9a-zA-Z_\\u4e00-\\u9fa5]+$");
        Matcher m = chsEnNumPattern.matcher(s);
        return m.matches();
    }
    /**
     * 加密字符串
     * @param methodName
     * @param enStr
     * @return
     */
    public static String encrypt(String methodName,String enStr)
    {
    	String returnString="";
    	try {
			Class<?> Clazz = Class.forName(QCommon.class.getName());
			Method method=Clazz.getMethod(methodName, String.class);
			returnString=(String)method.invoke(null, enStr);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return enStr;
		}
      return	returnString; 
    }
    /**
     * 获取文件HASH码
     * @param fileName
     * @param
     * @return
     * @throws Exception
     */
    public  static String getHash(String fileName)  
            throws Exception  
        {  
            InputStream fis = new FileInputStream(fileName);  
            byte buffer[] = new byte[1024];  
            MessageDigest md5 = MessageDigest.getInstance("MD5");  
            for(int numRead = 0; (numRead = fis.read(buffer)) > 0;)  
            {  
                md5.update(buffer, 0, numRead);  
            }  
            fis.close();  
            return toHexString(md5.digest());  
        }  
    
    /**
	 * 把字节数组转成16进位制数
	 * @param bytes
	 * @return
	 */
	public static String toHexString(byte[] bytes) {
		StringBuffer md5str = new StringBuffer();
		//把数组每一字节换成16进制连成md5字符串
		int digital;
		for (int i = 0; i < bytes.length; i++) {
			 digital = bytes[i];
			if(digital < 0) {
				digital += 256;
			}
			if(digital < 16){
				md5str.append("0");
			}
			md5str.append(Integer.toHexString(digital));
		}
		return md5str.toString().toUpperCase();
	}
	
	public static String decodeUicode(String unicodeStr) {  
	    if (unicodeStr == null) {  
	        return null;  
	    }  
	    StringBuffer retBuf = new StringBuffer();  
	    int maxLoop = unicodeStr.length();  
	    for (int i = 0; i < maxLoop; i++) {  
	        if (unicodeStr.charAt(i) == '\\') {  
	            if ((i < maxLoop - 5)  
	                    && ((unicodeStr.charAt(i + 1) == 'u') || (unicodeStr  
	                            .charAt(i + 1) == 'U')))  
	                try {  
	                    retBuf.append((char) Integer.parseInt(  
	                            unicodeStr.substring(i + 2, i + 6), 16));  
	                    i += 5;  
	                } catch (NumberFormatException localNumberFormatException) {  
	                    retBuf.append(unicodeStr.charAt(i));  
	                }  
	            else  
	                retBuf.append(unicodeStr.charAt(i));  
	        } else {  
	            retBuf.append(unicodeStr.charAt(i));  
	        }  
	    }  
	    return retBuf.toString();  
	}  
}
