<%@ page language="java" contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<head>
    <script type="text/javascript" src="/application/js/localization-ajax-calls.js"></script>
</head>

<s:form
        name="resourceForm"
        acceptcharset="UTF-8"
        enctype="multipart/form-data"
        method="GET"
        >

    <div>
        <button type="button" name="id" onclick="ValueChanged('/application/resourceBundleRequest.action?id=123');">Get response</button>
        <button type="reset">Clear</button>
    </div>
    <div>
        <div>
            <s:textarea name="valueEn" label="English"/>
        </div>
        <div>
            <s:textarea name="valueSi" label="Sinhala"/>
        </div>
        <div>
            <s:textarea name="valueTa" label="Tamil"/>
        </div>
        <div>
            <s:textarea name="description" label="Descripion"/>
        </div>
    </div>
</s:form>
