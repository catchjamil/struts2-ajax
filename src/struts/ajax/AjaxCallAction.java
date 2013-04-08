package struts.ajax;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletResponseAware;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AjaxCallAction extends ActionSupport implements ServletResponseAware {

    HttpServletResponse response;
    private String id;

    public String responseForAjaxCall() {
        String messageXml = "Sinhala|Tamil|English|This is description";
        System.out.println("Ajax request receive with id : [" + id + "] and reply value : " + messageXml);
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Cache-Control", "no-cache");
        try {
            response.getWriter().write(messageXml);
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        return null;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.response = httpServletResponse;
    }
}