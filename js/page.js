function nextPagetest() {
    var nextpage = parseInt(document.getElementById("nowpage").value);
    var begin = nextpage + 1;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    var selectArea = document.getElementById("selectArea").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = nextpage + 1;
    $.ajax({
        type: "post",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        url: "http://localhost:8080/page",
        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\"}",
        success: function(msg) {
            var str = "";
            for (let i = 0; i < msg.length; i++) {
                str += "<tr>" +
                    "<td align='center'>" + msg[i].t1 + "</td>" +
                    "<td align='center'>" + msg[i].t2 + "</td>" +
                    "<td align='center'>" + msg[i].t3 + "</td>" +
                    "<td align='center'>" + msg[i].t4 + "</td>" +
                    "<td align='center'>" + msg[i].t5 + "</td>" +
                    "<td align='center'>" + msg[i].t6 + "</td>" +
                    "<td align='center'>" + msg[i].t7 + "</td>" +
                    "<td align='center'>" + msg[i].t8 + "</td>" +
                    "<td align='center'>" + msg[i].t9 + "</td>" +
                    "<td align='center'>" + msg[i].t10 + "</td>" +
                    "<td align='center'>" + msg[i].t11 + "</td>" +
                    "<td align='center'>" + msg[i].t12 + "</td>" +
                    "<td align='center'>" + msg[i].t13 + "</td>" +
                    "<td align='center'>" + msg[i].t14 + "</td>" +
                    "<td align='center'>" + msg[i].t15 + "</td>" +
                    "<td align='center'>" + msg[i].t16 + "</td>" +
                    "<td align='center'>" + msg[i].t17 + "</td>" +
                    "</tr>"
            }

            tbody.innerHTML = str;
        },
        error: function() {
            alert("失败");
        }
    })

}

function pageCount() {
    var Countpage = document.getElementById("Pagecount")
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    console.log("a=" + selectDate + "b=" + selectArea);
    $.ajax({
        type: "post",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        url: "http://localhost:8080/pageCount",
        data: "{\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
        success(data) {
            Countpage.value = data[0].pageCount + 1;
        }
    })
}

function next() {
    var nextpage = parseInt(document.getElementById("nowpage").value);
    var begin = nextpage + 1;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    console.log(document.getElementById("selectDate").value);
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = nextpage + 1;
    var V1 = ["V", "V10001", "V10002", "V10003"];
    var V2 = ["V", "V10005", "V10006", "V10007", "V10008", "V10009", "V10025", "V10024"];
    var V3 = ["V", "V10013", "V10014", "V10015"];
    var map = {
        V10000: '碧桂园',
        V10004: '人杰',
        V10020: '北苑',
        V10011: '碧桂园北区',
        V10012: '碧桂园别墅区',
        V10010: '碧桂园南区',
        V10016: '人杰一期',
        V10013: '明发',
        V10001: '翰博三期',
        V10002: '翰博二期',
        V10003: '丽景',
        V10004: '宏颐',
        V10006: '府梓',
        V10007: '绿茵',
        V10008: '人杰二期',
        V10009: '碧桂园高层',
        V10014: '太湖一期',
        V10015: '太湖二期',
        V10017: '亚太换一期',
        V10018: '亚太换二期',
        V10019: '碧桂园西区',
        V10021: '亚泰三期',
        V10022: '翰博皇家御湾',
        V10023: '太湖明珠',
        V10024: '碧桂园东北区',
        V10025: '博物馆',
    }
    $('span').empty();
    document.getElementById("span").append(map[selectArea] + "数据表格如下：")


    if (selectArea == "V10020") {
        document.getElementById("table-a").style.display = "";
        document.getElementById("table-result").style.display = "none";
        document.getElementById("table").style.display = "none";
        document.getElementById("table-b").style.display = "none";
        document.getElementById("table-c").style.display = "none";
        document.getElementById("table-g").style.display = "none";
        document.getElementById("table-d").style.display = "none";
        document.getElementById("table-e").style.display = "none";
        document.getElementById("table-f").style.display = "none";
        var tbody = window.document.getElementById("tbody-a");

        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/page",
            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
            success: function(msg) {
                var str = "";
                for (let i = 0; i < msg.length; i++) {
                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                        "<td align='center'>" + msg[i].t1 + "</td>" +
                        "<td align='center'>" + msg[i].t2 + "</td>" +
                        "<td align='center'>" + msg[i].t3 + "</td>" +
                        "<td align='center'>" + msg[i].t4 + "</td>" +
                        "<td align='center'>" + msg[i].t5 + "</td>" +
                        "<td align='center'>" + msg[i].t6 + "</td>" +
                        "<td align='center'>" + msg[i].t7 + "</td>" +
                        "<td align='center'>" + msg[i].t8 + "</td>" +
                        "<td align='center'>" + msg[i].t9 + "</td>" +
                        "<td align='center'>" + msg[i].t10 + "</td>" +
                        "<td align='center'>" + msg[i].t11 + "</td>" +
                        "<td align='center'>" + msg[i].t12 + "</td>" +
                        "<td align='center'>" + msg[i].t13 + "</td>" +
                        "<td align='center'>" + msg[i].t14 + "</td>" +
                        "<td align='center'>" + msg[i].t15 + "</td>" +
                        "<td align='center'>" + msg[i].t16 + "</td>" +
                        "<td align='center'>" + msg[i].t17 + "</td>" +
                        "</tr>"
                }

                tbody.innerHTML = str;
            },
            error: function() {
                alert("失败");
            }
        })
    } else {
        if (V1.indexOf(selectArea) > 0) {

            document.getElementById("table-a").style.display = "none";
            document.getElementById("table-result").style.display = "";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-b").style.display = "none";
            document.getElementById("table-c").style.display = "none";
            document.getElementById("table-g").style.display = "none";
            document.getElementById("table-d").style.display = "none";
            document.getElementById("table-e").style.display = "none";
            document.getElementById("table-f").style.display = "none";
            var tbody = window.document.getElementById("tbody-result");


            $.ajax({
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                url: "http://localhost:8080/page",
                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                success: function(msg) {
                    var str = "";
                    for (let i = 0; i < msg.length; i++) {
                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                            "<td align='center'>" + msg[i].t1 + "</td>" +
                            "<td align='center'>" + msg[i].t2 + "</td>" +
                            "<td align='center'>" + msg[i].t3 + "</td>" +
                            "<td align='center'>" + msg[i].t4 + "</td>" +
                            "<td align='center'>" + msg[i].t5 + "</td>" +
                            "<td align='center'>" + msg[i].t6 + "</td>" +
                            "<td align='center'>" + msg[i].t7 + "</td>" +
                            "<td align='center'>" + msg[i].t8 + "</td>" +
                            "<td align='center'>" + msg[i].t9 + "</td>" +
                            "<td align='center'>" + msg[i].t10 + "</td>" +
                            "<td align='center'>" + msg[i].t11 + "</td>" +
                            "<td align='center'>" + msg[i].t12 + "</td>" +
                            "<td align='center'>" + msg[i].t13 + "</td>" +
                            "<td align='center'>" + msg[i].t14 + "</td>" +
                            "<td align='center'>" + msg[i].t15 + "</td>" +
                            "<td align='center'>" + msg[i].t16 + "</td>" +
                            "<td align='center'>" + msg[i].t17 + "</td>" +
                            "<td align='center'>" + msg[i].t18 + "</td>" +
                            "<td align='center'>" + msg[i].t19 + "</td>" +
                            "<td align='center'>" + msg[i].t20 + "</td>" +
                            "<td align='center'>" + msg[i].t21 + "</td>" +
                            "<td align='center'>" + msg[i].t22 + "</td>" +
                            "</tr>"
                    }

                    tbody.innerHTML = str;
                },
                error: function() {
                    alert("失败");
                }
            })
        } else {
            if (selectArea == "V10004") {

                document.getElementById("table-a").style.display = "none";
                document.getElementById("table-result").style.display = "none";
                document.getElementById("table").style.display = "";
                document.getElementById("table-b").style.display = "none";
                document.getElementById("table-c").style.display = "none";
                document.getElementById("table-g").style.display = "none";
                document.getElementById("table-d").style.display = "none";
                document.getElementById("table-e").style.display = "none";
                document.getElementById("table-f").style.display = "none";
                var tbody = window.document.getElementById("table-t");

                $.ajax({
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    url: "http://localhost:8080/page",
                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                    success: function(msg) {
                        var str = "";
                        for (let i = 0; i < msg.length; i++) {
                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                "</tr>"
                        }

                        tbody.innerHTML = str;
                    },
                    error: function() {
                        alert("失败");
                    }
                })
            } else {
                if (selectArea == "V10011") {

                    document.getElementById("table-a").style.display = "none";
                    document.getElementById("table-result").style.display = "none";
                    document.getElementById("table").style.display = "none";
                    document.getElementById("table-b").style.display = "";
                    document.getElementById("table-c").style.display = "none";
                    document.getElementById("table-g").style.display = "none";
                    document.getElementById("table-d").style.display = "none";
                    document.getElementById("table-e").style.display = "none";
                    document.getElementById("table-f").style.display = "none";
                    var tbody = window.document.getElementById("tbody-b");

                    $.ajax({
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: "http://localhost:8080/page",
                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                        success: function(msg) {
                            var str = "";
                            for (let i = 0; i < msg.length; i++) {
                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                    "</tr>"
                            }

                            tbody.innerHTML = str;
                        },
                        error: function() {
                            alert("失败");
                        }
                    })
                } else {
                    if (selectArea == "V10012") {

                        document.getElementById("table-a").style.display = "none";
                        document.getElementById("table-result").style.display = "none";
                        document.getElementById("table").style.display = "none";
                        document.getElementById("table-b").style.display = "none";
                        document.getElementById("table-c").style.display = "";
                        document.getElementById("table-g").style.display = "none";
                        document.getElementById("table-d").style.display = "none";
                        document.getElementById("table-e").style.display = "none";
                        document.getElementById("table-f").style.display = "none";
                        var tbody = window.document.getElementById("tbody-c");

                        $.ajax({
                            type: "post",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            url: "http://localhost:8080/page",
                            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                            success: function(msg) {
                                var str = "";
                                for (let i = 0; i < msg.length; i++) {
                                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                        "<td align='center'>" + msg[i].t1 + "</td>" +
                                        "<td align='center'>" + msg[i].t2 + "</td>" +
                                        "<td align='center'>" + msg[i].t3 + "</td>" +
                                        "<td align='center'>" + msg[i].t4 + "</td>" +
                                        "<td align='center'>" + msg[i].t5 + "</td>" +
                                        "<td align='center'>" + msg[i].t6 + "</td>" +
                                        "<td align='center'>" + msg[i].t7 + "</td>" +
                                        "<td align='center'>" + msg[i].t8 + "</td>" +
                                        "<td align='center'>" + msg[i].t9 + "</td>" +
                                        "<td align='center'>" + msg[i].t10 + "</td>" +
                                        "<td align='center'>" + msg[i].t11 + "</td>" +
                                        "<td align='center'>" + msg[i].t12 + "</td>" +
                                        "<td align='center'>" + msg[i].t13 + "</td>" +
                                        "<td align='center'>" + msg[i].t14 + "</td>" +
                                        "<td align='center'>" + msg[i].t15 + "</td>" +
                                        "<td align='center'>" + msg[i].t16 + "</td>" +
                                        "<td align='center'>" + msg[i].t17 + "</td>" +
                                        "<td align='center'>" + msg[i].t18 + "</td>" +
                                        "<td align='center'>" + msg[i].t19 + "</td>" +
                                        "<td align='center'>" + msg[i].t20 + "</td>" +
                                        "<td align='center'>" + msg[i].t21 + "</td>" +
                                        "<td align='center'>" + msg[i].t22 + "</td>" +
                                        "<td align='center'>" + msg[i].t23 + "</td>" +
                                        "<td align='center'>" + msg[i].t24 + "</td>" +
                                        "<td align='center'>" + msg[i].t25 + "</td>" +
                                        "<td align='center'>" + msg[i].t26 + "</td>" +
                                        "<td align='center'>" + msg[i].t27 + "</td>" +
                                        "<td align='center'>" + msg[i].t28 + "</td>" +
                                        "<td align='center'>" + msg[i].t29 + "</td>" +
                                        "<td align='center'>" + msg[i].t30 + "</td>" +
                                        "<td align='center'>" + msg[i].t31 + "</td>" +
                                        "<td align='center'>" + msg[i].t32 + "</td>" +
                                        "<td align='center'>" + msg[i].t33 + "</td>" +
                                        "</tr>"
                                }

                                tbody.innerHTML = str;
                            },
                            error: function() {
                                alert("失败");
                            }
                        })

                    } else {
                        if (V2.indexOf(selectArea) > 0) {

                            document.getElementById("table-a").style.display = "none";
                            document.getElementById("table-result").style.display = "none";
                            document.getElementById("table").style.display = "none";
                            document.getElementById("table-b").style.display = "none";
                            document.getElementById("table-c").style.display = "none";
                            document.getElementById("table-g").style.display = "";
                            document.getElementById("table-d").style.display = "none";
                            document.getElementById("table-e").style.display = "none";
                            document.getElementById("table-f").style.display = "none";
                            var tbody = window.document.getElementById("tbody-g");

                            $.ajax({
                                type: "post",
                                dataType: "json",
                                contentType: "application/json;charset=utf-8",
                                url: "http://localhost:8080/page",
                                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                success: function(msg) {
                                    var str = "";
                                    for (let i = 0; i < msg.length; i++) {
                                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                            "<td align='center'>" + msg[i].t1 + "</td>" +
                                            "<td align='center'>" + msg[i].t2 + "</td>" +
                                            "<td align='center'>" + msg[i].t3 + "</td>" +
                                            "<td align='center'>" + msg[i].t4 + "</td>" +
                                            "<td align='center'>" + msg[i].t5 + "</td>" +
                                            "<td align='center'>" + msg[i].t6 + "</td>" +
                                            "<td align='center'>" + msg[i].t7 + "</td>" +
                                            "<td align='center'>" + msg[i].t8 + "</td>" +
                                            "<td align='center'>" + msg[i].t9 + "</td>" +
                                            "<td align='center'>" + msg[i].t10 + "</td>" +
                                            "<td align='center'>" + msg[i].t11 + "</td>" +
                                            "<td align='center'>" + msg[i].t12 + "</td>" +
                                            "<td align='center'>" + msg[i].t13 + "</td>" +
                                            "<td align='center'>" + msg[i].t14 + "</td>" +
                                            "<td align='center'>" + msg[i].t15 + "</td>" +
                                            "<td align='center'>" + msg[i].t16 + "</td>" +
                                            "<td align='center'>" + msg[i].t17 + "</td>" +
                                            "<td align='center'>" + msg[i].t18 + "</td>" +
                                            "<td align='center'>" + msg[i].t19 + "</td>" +
                                            "<td align='center'>" + msg[i].t20 + "</td>" +
                                            "<td align='center'>" + msg[i].t21 + "</td>" +
                                            "<td align='center'>" + msg[i].t22 + "</td>" +
                                            "<td align='center'>" + msg[i].t23 + "</td>" +
                                            "<td align='center'>" + msg[i].t24 + "</td>" +
                                            "<td align='center'>" + msg[i].t25 + "</td>" +
                                            "<td align='center'>" + msg[i].t26 + "</td>" +
                                            "<td align='center'>" + msg[i].t27 + "</td>" +
                                            "<td align='center'>" + msg[i].t28 + "</td>" +
                                            "<td align='center'>" + msg[i].t29 + "</td>" +
                                            "<td align='center'>" + msg[i].t30 + "</td>" +
                                            "<td align='center'>" + msg[i].t31 + "</td>" +
                                            "<td align='center'>" + msg[i].t32 + "</td>" +
                                            "<td align='center'>" + msg[i].t33 + "</td>" +
                                            "<td align='center'>" + msg[i].t34 + "</td>" +
                                            "</tr>"
                                    }

                                    tbody.innerHTML = str;
                                },
                                error: function() {
                                    alert("失败");
                                }
                            })

                        } else {
                            if (selectArea == "V10010") {

                                document.getElementById("table-a").style.display = "none";
                                document.getElementById("table-result").style.display = "none";
                                document.getElementById("table").style.display = "none";
                                document.getElementById("table-b").style.display = "none";
                                document.getElementById("table-c").style.display = "none";
                                document.getElementById("table-g").style.display = "none";
                                document.getElementById("table-d").style.display = "";
                                document.getElementById("table-e").style.display = "none";
                                document.getElementById("table-f").style.display = "none";
                                var tbody = window.document.getElementById("tbody-d");

                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/json;charset=utf-8",
                                    url: "http://localhost:8080/page",
                                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                    success: function(msg) {
                                        var str = "";
                                        for (let i = 0; i < msg.length; i++) {
                                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                                "<td align='center'>" + msg[i].t24 + "</td>" +
                                                "<td align='center'>" + msg[i].t25 + "</td>" +
                                                "<td align='center'>" + msg[i].t26 + "</td>" +
                                                "<td align='center'>" + msg[i].t27 + "</td>" +
                                                "<td align='center'>" + msg[i].t28 + "</td>" +
                                                "<td align='center'>" + msg[i].t29 + "</td>" +
                                                "<td align='center'>" + msg[i].t30 + "</td>" +
                                                "<td align='center'>" + msg[i].t31 + "</td>" +
                                                "<td align='center'>" + msg[i].t32 + "</td>" +
                                                "<td align='center'>" + msg[i].t33 + "</td>" +
                                                "<td align='center'>" + msg[i].t34 + "</td>" +
                                                "<td align='center'>" + msg[i].t35 + "</td>" +
                                                "</tr>"
                                        }

                                        tbody.innerHTML = str;
                                    },
                                    error: function() {
                                        alert("失败");
                                    }
                                })

                            } else {
                                if (selectArea == "V10016") {
                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "";
                                    document.getElementById("table-f").style.display = "none";
                                    var tbody = window.document.getElementById("tbody-e");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                } else {

                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "none";
                                    document.getElementById("table-f").style.display = "";
                                    var tbody = window.document.getElementById("tbody-f");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "<td align='center'>" + msg[i].t38 + "</td>" +
                                                    "<td align='center'>" + msg[i].t39 + "</td>" +
                                                    "<td align='center'>" + msg[i].t40 + "</td>" +
                                                    "<td align='center'>" + msg[i].t41 + "</td>" +
                                                    "<td align='center'>" + msg[i].t42 + "</td>" +
                                                    "<td align='center'>" + msg[i].t43 + "</td>" +
                                                    "<td align='center'>" + msg[i].t44 + "</td>" +
                                                    "<td align='center'>" + msg[i].t45 + "</td>" +
                                                    "<td align='center'>" + msg[i].t46 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function prev() {
    var nextpage = parseInt(document.getElementById("nowpage").value);
    var begin = nextpage - 1;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = nextpage - 1;
    var V1 = ["V", "V10001", "V10002", "V10003"];
    var V2 = ["V", "V10005", "V10006", "V10007", "V10008", "V10009", "V10025", "V10024"];
    var V3 = ["V", "V10013", "V10014", "V10015"];
    var map = {
        V10000: '碧桂园',
        V10004: '人杰',
        V10020: '北苑',
        V10011: '碧桂园北区',
        V10012: '碧桂园别墅区',
        V10010: '碧桂园南区',
        V10016: '人杰一期',
        V10013: '明发',
        V10001: '翰博三期',
        V10002: '翰博二期',
        V10003: '丽景',
        V10004: '宏颐',
        V10006: '府梓',
        V10007: '绿茵',
        V10008: '人杰二期',
        V10009: '碧桂园高层',
        V10014: '太湖一期',
        V10015: '太湖二期',
        V10017: '亚太换一期',
        V10018: '亚太换二期',
        V10019: '碧桂园西区',
        V10021: '亚泰三期',
        V10022: '翰博皇家御湾',
        V10023: '太湖明珠',
        V10024: '碧桂园东北区',
        V10025: '博物馆',
    }
    $('span').empty();
    document.getElementById("span").append(map[selectArea] + "数据表格如下：")

    if (selectArea == "V10020") {
        document.getElementById("table-a").style.display = "";
        document.getElementById("table-result").style.display = "none";
        document.getElementById("table").style.display = "none";
        document.getElementById("table-b").style.display = "none";
        document.getElementById("table-c").style.display = "none";
        document.getElementById("table-g").style.display = "none";
        document.getElementById("table-d").style.display = "none";
        document.getElementById("table-e").style.display = "none";
        document.getElementById("table-f").style.display = "none";
        var tbody = window.document.getElementById("tbody-a");

        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/page",
            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
            success: function(msg) {
                var str = "";
                for (let i = 0; i < msg.length; i++) {
                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                        "<td align='center'>" + msg[i].t1 + "</td>" +
                        "<td align='center'>" + msg[i].t2 + "</td>" +
                        "<td align='center'>" + msg[i].t3 + "</td>" +
                        "<td align='center'>" + msg[i].t4 + "</td>" +
                        "<td align='center'>" + msg[i].t5 + "</td>" +
                        "<td align='center'>" + msg[i].t6 + "</td>" +
                        "<td align='center'>" + msg[i].t7 + "</td>" +
                        "<td align='center'>" + msg[i].t8 + "</td>" +
                        "<td align='center'>" + msg[i].t9 + "</td>" +
                        "<td align='center'>" + msg[i].t10 + "</td>" +
                        "<td align='center'>" + msg[i].t11 + "</td>" +
                        "<td align='center'>" + msg[i].t12 + "</td>" +
                        "<td align='center'>" + msg[i].t13 + "</td>" +
                        "<td align='center'>" + msg[i].t14 + "</td>" +
                        "<td align='center'>" + msg[i].t15 + "</td>" +
                        "<td align='center'>" + msg[i].t16 + "</td>" +
                        "<td align='center'>" + msg[i].t17 + "</td>" +
                        "</tr>"
                }

                tbody.innerHTML = str;
            },
            error: function() {
                alert("失败");
            }
        })
    } else {
        if (V1.indexOf(selectArea) > 0) {

            document.getElementById("table-a").style.display = "none";
            document.getElementById("table-result").style.display = "";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-b").style.display = "none";
            document.getElementById("table-c").style.display = "none";
            document.getElementById("table-g").style.display = "none";
            document.getElementById("table-d").style.display = "none";
            document.getElementById("table-e").style.display = "none";
            document.getElementById("table-f").style.display = "none";
            var tbody = window.document.getElementById("tbody-result");


            $.ajax({
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                url: "http://localhost:8080/page",
                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                success: function(msg) {
                    var str = "";
                    for (let i = 0; i < msg.length; i++) {
                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                            "<td align='center'>" + msg[i].t1 + "</td>" +
                            "<td align='center'>" + msg[i].t2 + "</td>" +
                            "<td align='center'>" + msg[i].t3 + "</td>" +
                            "<td align='center'>" + msg[i].t4 + "</td>" +
                            "<td align='center'>" + msg[i].t5 + "</td>" +
                            "<td align='center'>" + msg[i].t6 + "</td>" +
                            "<td align='center'>" + msg[i].t7 + "</td>" +
                            "<td align='center'>" + msg[i].t8 + "</td>" +
                            "<td align='center'>" + msg[i].t9 + "</td>" +
                            "<td align='center'>" + msg[i].t10 + "</td>" +
                            "<td align='center'>" + msg[i].t11 + "</td>" +
                            "<td align='center'>" + msg[i].t12 + "</td>" +
                            "<td align='center'>" + msg[i].t13 + "</td>" +
                            "<td align='center'>" + msg[i].t14 + "</td>" +
                            "<td align='center'>" + msg[i].t15 + "</td>" +
                            "<td align='center'>" + msg[i].t16 + "</td>" +
                            "<td align='center'>" + msg[i].t17 + "</td>" +
                            "<td align='center'>" + msg[i].t18 + "</td>" +
                            "<td align='center'>" + msg[i].t19 + "</td>" +
                            "<td align='center'>" + msg[i].t20 + "</td>" +
                            "<td align='center'>" + msg[i].t21 + "</td>" +
                            "<td align='center'>" + msg[i].t22 + "</td>" +
                            "</tr>"
                    }

                    tbody.innerHTML = str;
                },
                error: function() {
                    alert("失败");
                }
            })
        } else {
            if (selectArea == "V10004") {

                document.getElementById("table-a").style.display = "none";
                document.getElementById("table-result").style.display = "none";
                document.getElementById("table").style.display = "";
                document.getElementById("table-b").style.display = "none";
                document.getElementById("table-c").style.display = "none";
                document.getElementById("table-g").style.display = "none";
                document.getElementById("table-d").style.display = "none";
                document.getElementById("table-e").style.display = "none";
                document.getElementById("table-f").style.display = "none";
                var tbody = window.document.getElementById("table-t");

                $.ajax({
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    url: "http://localhost:8080/page",
                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                    success: function(msg) {
                        var str = "";
                        for (let i = 0; i < msg.length; i++) {
                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                "</tr>"
                        }

                        tbody.innerHTML = str;
                    },
                    error: function() {
                        alert("失败");
                    }
                })
            } else {
                if (selectArea == "V10011") {

                    document.getElementById("table-a").style.display = "none";
                    document.getElementById("table-result").style.display = "none";
                    document.getElementById("table").style.display = "none";
                    document.getElementById("table-b").style.display = "";
                    document.getElementById("table-c").style.display = "none";
                    document.getElementById("table-g").style.display = "none";
                    document.getElementById("table-d").style.display = "none";
                    document.getElementById("table-e").style.display = "none";
                    document.getElementById("table-f").style.display = "none";
                    var tbody = window.document.getElementById("tbody-b");

                    $.ajax({
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: "http://localhost:8080/page",
                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                        success: function(msg) {
                            var str = "";
                            for (let i = 0; i < msg.length; i++) {
                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                    "</tr>"
                            }

                            tbody.innerHTML = str;
                        },
                        error: function() {
                            alert("失败");
                        }
                    })
                } else {
                    if (selectArea == "V10012") {

                        document.getElementById("table-a").style.display = "none";
                        document.getElementById("table-result").style.display = "none";
                        document.getElementById("table").style.display = "none";
                        document.getElementById("table-b").style.display = "none";
                        document.getElementById("table-c").style.display = "";
                        document.getElementById("table-g").style.display = "none";
                        document.getElementById("table-d").style.display = "none";
                        document.getElementById("table-e").style.display = "none";
                        document.getElementById("table-f").style.display = "none";
                        var tbody = window.document.getElementById("tbody-c");

                        $.ajax({
                            type: "post",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            url: "http://localhost:8080/page",
                            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                            success: function(msg) {
                                var str = "";
                                for (let i = 0; i < msg.length; i++) {
                                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                        "<td align='center'>" + msg[i].t1 + "</td>" +
                                        "<td align='center'>" + msg[i].t2 + "</td>" +
                                        "<td align='center'>" + msg[i].t3 + "</td>" +
                                        "<td align='center'>" + msg[i].t4 + "</td>" +
                                        "<td align='center'>" + msg[i].t5 + "</td>" +
                                        "<td align='center'>" + msg[i].t6 + "</td>" +
                                        "<td align='center'>" + msg[i].t7 + "</td>" +
                                        "<td align='center'>" + msg[i].t8 + "</td>" +
                                        "<td align='center'>" + msg[i].t9 + "</td>" +
                                        "<td align='center'>" + msg[i].t10 + "</td>" +
                                        "<td align='center'>" + msg[i].t11 + "</td>" +
                                        "<td align='center'>" + msg[i].t12 + "</td>" +
                                        "<td align='center'>" + msg[i].t13 + "</td>" +
                                        "<td align='center'>" + msg[i].t14 + "</td>" +
                                        "<td align='center'>" + msg[i].t15 + "</td>" +
                                        "<td align='center'>" + msg[i].t16 + "</td>" +
                                        "<td align='center'>" + msg[i].t17 + "</td>" +
                                        "<td align='center'>" + msg[i].t18 + "</td>" +
                                        "<td align='center'>" + msg[i].t19 + "</td>" +
                                        "<td align='center'>" + msg[i].t20 + "</td>" +
                                        "<td align='center'>" + msg[i].t21 + "</td>" +
                                        "<td align='center'>" + msg[i].t22 + "</td>" +
                                        "<td align='center'>" + msg[i].t23 + "</td>" +
                                        "<td align='center'>" + msg[i].t24 + "</td>" +
                                        "<td align='center'>" + msg[i].t25 + "</td>" +
                                        "<td align='center'>" + msg[i].t26 + "</td>" +
                                        "<td align='center'>" + msg[i].t27 + "</td>" +
                                        "<td align='center'>" + msg[i].t28 + "</td>" +
                                        "<td align='center'>" + msg[i].t29 + "</td>" +
                                        "<td align='center'>" + msg[i].t30 + "</td>" +
                                        "<td align='center'>" + msg[i].t31 + "</td>" +
                                        "<td align='center'>" + msg[i].t32 + "</td>" +
                                        "<td align='center'>" + msg[i].t33 + "</td>" +
                                        "</tr>"
                                }

                                tbody.innerHTML = str;
                            },
                            error: function() {
                                alert("失败");
                            }
                        })

                    } else {
                        if (V2.indexOf(selectArea) > 0) {

                            document.getElementById("table-a").style.display = "none";
                            document.getElementById("table-result").style.display = "none";
                            document.getElementById("table").style.display = "none";
                            document.getElementById("table-b").style.display = "none";
                            document.getElementById("table-c").style.display = "none";
                            document.getElementById("table-g").style.display = "";
                            document.getElementById("table-d").style.display = "none";
                            document.getElementById("table-e").style.display = "none";
                            document.getElementById("table-f").style.display = "none";
                            var tbody = window.document.getElementById("tbody-g");

                            $.ajax({
                                type: "post",
                                dataType: "json",
                                contentType: "application/json;charset=utf-8",
                                url: "http://localhost:8080/page",
                                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                success: function(msg) {
                                    var str = "";
                                    for (let i = 0; i < msg.length; i++) {
                                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                            "<td align='center'>" + msg[i].t1 + "</td>" +
                                            "<td align='center'>" + msg[i].t2 + "</td>" +
                                            "<td align='center'>" + msg[i].t3 + "</td>" +
                                            "<td align='center'>" + msg[i].t4 + "</td>" +
                                            "<td align='center'>" + msg[i].t5 + "</td>" +
                                            "<td align='center'>" + msg[i].t6 + "</td>" +
                                            "<td align='center'>" + msg[i].t7 + "</td>" +
                                            "<td align='center'>" + msg[i].t8 + "</td>" +
                                            "<td align='center'>" + msg[i].t9 + "</td>" +
                                            "<td align='center'>" + msg[i].t10 + "</td>" +
                                            "<td align='center'>" + msg[i].t11 + "</td>" +
                                            "<td align='center'>" + msg[i].t12 + "</td>" +
                                            "<td align='center'>" + msg[i].t13 + "</td>" +
                                            "<td align='center'>" + msg[i].t14 + "</td>" +
                                            "<td align='center'>" + msg[i].t15 + "</td>" +
                                            "<td align='center'>" + msg[i].t16 + "</td>" +
                                            "<td align='center'>" + msg[i].t17 + "</td>" +
                                            "<td align='center'>" + msg[i].t18 + "</td>" +
                                            "<td align='center'>" + msg[i].t19 + "</td>" +
                                            "<td align='center'>" + msg[i].t20 + "</td>" +
                                            "<td align='center'>" + msg[i].t21 + "</td>" +
                                            "<td align='center'>" + msg[i].t22 + "</td>" +
                                            "<td align='center'>" + msg[i].t23 + "</td>" +
                                            "<td align='center'>" + msg[i].t24 + "</td>" +
                                            "<td align='center'>" + msg[i].t25 + "</td>" +
                                            "<td align='center'>" + msg[i].t26 + "</td>" +
                                            "<td align='center'>" + msg[i].t27 + "</td>" +
                                            "<td align='center'>" + msg[i].t28 + "</td>" +
                                            "<td align='center'>" + msg[i].t29 + "</td>" +
                                            "<td align='center'>" + msg[i].t30 + "</td>" +
                                            "<td align='center'>" + msg[i].t31 + "</td>" +
                                            "<td align='center'>" + msg[i].t32 + "</td>" +
                                            "<td align='center'>" + msg[i].t33 + "</td>" +
                                            "<td align='center'>" + msg[i].t34 + "</td>" +
                                            "</tr>"
                                    }

                                    tbody.innerHTML = str;
                                },
                                error: function() {
                                    alert("失败");
                                }
                            })

                        } else {
                            if (selectArea == "V10010") {

                                document.getElementById("table-a").style.display = "none";
                                document.getElementById("table-result").style.display = "none";
                                document.getElementById("table").style.display = "none";
                                document.getElementById("table-b").style.display = "none";
                                document.getElementById("table-c").style.display = "none";
                                document.getElementById("table-g").style.display = "none";
                                document.getElementById("table-d").style.display = "";
                                document.getElementById("table-e").style.display = "none";
                                document.getElementById("table-f").style.display = "none";
                                var tbody = window.document.getElementById("tbody-d");

                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/json;charset=utf-8",
                                    url: "http://localhost:8080/page",
                                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                    success: function(msg) {
                                        var str = "";
                                        for (let i = 0; i < msg.length; i++) {
                                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                                "<td align='center'>" + msg[i].t24 + "</td>" +
                                                "<td align='center'>" + msg[i].t25 + "</td>" +
                                                "<td align='center'>" + msg[i].t26 + "</td>" +
                                                "<td align='center'>" + msg[i].t27 + "</td>" +
                                                "<td align='center'>" + msg[i].t28 + "</td>" +
                                                "<td align='center'>" + msg[i].t29 + "</td>" +
                                                "<td align='center'>" + msg[i].t30 + "</td>" +
                                                "<td align='center'>" + msg[i].t31 + "</td>" +
                                                "<td align='center'>" + msg[i].t32 + "</td>" +
                                                "<td align='center'>" + msg[i].t33 + "</td>" +
                                                "<td align='center'>" + msg[i].t34 + "</td>" +
                                                "<td align='center'>" + msg[i].t35 + "</td>" +
                                                "</tr>"
                                        }

                                        tbody.innerHTML = str;
                                    },
                                    error: function() {
                                        alert("失败");
                                    }
                                })

                            } else {
                                if (selectArea == "V10016") {
                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "";
                                    document.getElementById("table-f").style.display = "none";
                                    var tbody = window.document.getElementById("tbody-e");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                } else {

                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "none";
                                    document.getElementById("table-f").style.display = "";
                                    var tbody = window.document.getElementById("tbody-f");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "<td align='center'>" + msg[i].t38 + "</td>" +
                                                    "<td align='center'>" + msg[i].t39 + "</td>" +
                                                    "<td align='center'>" + msg[i].t40 + "</td>" +
                                                    "<td align='center'>" + msg[i].t41 + "</td>" +
                                                    "<td align='center'>" + msg[i].t42 + "</td>" +
                                                    "<td align='center'>" + msg[i].t43 + "</td>" +
                                                    "<td align='center'>" + msg[i].t44 + "</td>" +
                                                    "<td align='center'>" + msg[i].t45 + "</td>" +
                                                    "<td align='center'>" + msg[i].t46 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })


                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function first() {
    var nextpage = parseInt(1);
    var begin = nextpage;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = 1;
    var V1 = ["V", "V10001", "V10002", "V10003"];
    var V2 = ["V", "V10005", "V10006", "V10007", "V10008", "V10009", "V10025", "V10024"];
    var V3 = ["V", "V10013", "V10014", "V10015"];
    var map = {
        V10000: '碧桂园',
        V10004: '人杰',
        V10020: '北苑',
        V10011: '碧桂园北区',
        V10012: '碧桂园别墅区',
        V10010: '碧桂园南区',
        V10016: '人杰一期',
        V10013: '明发',
        V10001: '翰博三期',
        V10002: '翰博二期',
        V10003: '丽景',
        V10004: '宏颐',
        V10006: '府梓',
        V10007: '绿茵',
        V10008: '人杰二期',
        V10009: '碧桂园高层',
        V10014: '太湖一期',
        V10015: '太湖二期',
        V10017: '亚太换一期',
        V10018: '亚太换二期',
        V10019: '碧桂园西区',
        V10021: '亚泰三期',
        V10022: '翰博皇家御湾',
        V10023: '太湖明珠',
        V10024: '碧桂园东北区',
        V10025: '博物馆',
    }
    $('span').empty();
    document.getElementById("span").append(map[selectArea] + "数据表格如下：")

    if (selectArea == "V10020") {
        document.getElementById("table-a").style.display = "";
        document.getElementById("table-result").style.display = "none";
        document.getElementById("table").style.display = "none";
        document.getElementById("table-b").style.display = "none";
        document.getElementById("table-c").style.display = "none";
        document.getElementById("table-g").style.display = "none";
        document.getElementById("table-d").style.display = "none";
        document.getElementById("table-e").style.display = "none";
        document.getElementById("table-f").style.display = "none";
        var tbody = window.document.getElementById("tbody-a");

        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/page",
            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
            success: function(msg) {
                var str = "";
                for (let i = 0; i < msg.length; i++) {
                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                        "<td align='center'>" + msg[i].t1 + "</td>" +
                        "<td align='center'>" + msg[i].t2 + "</td>" +
                        "<td align='center'>" + msg[i].t3 + "</td>" +
                        "<td align='center'>" + msg[i].t4 + "</td>" +
                        "<td align='center'>" + msg[i].t5 + "</td>" +
                        "<td align='center'>" + msg[i].t6 + "</td>" +
                        "<td align='center'>" + msg[i].t7 + "</td>" +
                        "<td align='center'>" + msg[i].t8 + "</td>" +
                        "<td align='center'>" + msg[i].t9 + "</td>" +
                        "<td align='center'>" + msg[i].t10 + "</td>" +
                        "<td align='center'>" + msg[i].t11 + "</td>" +
                        "<td align='center'>" + msg[i].t12 + "</td>" +
                        "<td align='center'>" + msg[i].t13 + "</td>" +
                        "<td align='center'>" + msg[i].t14 + "</td>" +
                        "<td align='center'>" + msg[i].t15 + "</td>" +
                        "<td align='center'>" + msg[i].t16 + "</td>" +
                        "<td align='center'>" + msg[i].t17 + "</td>" +
                        "</tr>"
                }

                tbody.innerHTML = str;
            },
            error: function() {
                alert("失败");
            }
        })
    } else {
        if (V1.indexOf(selectArea) > 0) {

            document.getElementById("table-a").style.display = "none";
            document.getElementById("table-result").style.display = "";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-b").style.display = "none";
            document.getElementById("table-c").style.display = "none";
            document.getElementById("table-g").style.display = "none";
            document.getElementById("table-d").style.display = "none";
            document.getElementById("table-e").style.display = "none";
            document.getElementById("table-f").style.display = "none";
            var tbody = window.document.getElementById("tbody-result");


            $.ajax({
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                url: "http://localhost:8080/page",
                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                success: function(msg) {
                    var str = "";
                    for (let i = 0; i < msg.length; i++) {
                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                            "<td align='center'>" + msg[i].t1 + "</td>" +
                            "<td align='center'>" + msg[i].t2 + "</td>" +
                            "<td align='center'>" + msg[i].t3 + "</td>" +
                            "<td align='center'>" + msg[i].t4 + "</td>" +
                            "<td align='center'>" + msg[i].t5 + "</td>" +
                            "<td align='center'>" + msg[i].t6 + "</td>" +
                            "<td align='center'>" + msg[i].t7 + "</td>" +
                            "<td align='center'>" + msg[i].t8 + "</td>" +
                            "<td align='center'>" + msg[i].t9 + "</td>" +
                            "<td align='center'>" + msg[i].t10 + "</td>" +
                            "<td align='center'>" + msg[i].t11 + "</td>" +
                            "<td align='center'>" + msg[i].t12 + "</td>" +
                            "<td align='center'>" + msg[i].t13 + "</td>" +
                            "<td align='center'>" + msg[i].t14 + "</td>" +
                            "<td align='center'>" + msg[i].t15 + "</td>" +
                            "<td align='center'>" + msg[i].t16 + "</td>" +
                            "<td align='center'>" + msg[i].t17 + "</td>" +
                            "<td align='center'>" + msg[i].t18 + "</td>" +
                            "<td align='center'>" + msg[i].t19 + "</td>" +
                            "<td align='center'>" + msg[i].t20 + "</td>" +
                            "<td align='center'>" + msg[i].t21 + "</td>" +
                            "<td align='center'>" + msg[i].t22 + "</td>" +
                            "</tr>"
                    }

                    tbody.innerHTML = str;
                },
                error: function() {
                    alert("失败");
                }
            })
        } else {
            if (selectArea == "V10004") {

                document.getElementById("table-a").style.display = "none";
                document.getElementById("table-result").style.display = "none";
                document.getElementById("table").style.display = "";
                document.getElementById("table-b").style.display = "none";
                document.getElementById("table-c").style.display = "none";
                document.getElementById("table-g").style.display = "none";
                document.getElementById("table-d").style.display = "none";
                document.getElementById("table-e").style.display = "none";
                document.getElementById("table-f").style.display = "none";
                var tbody = window.document.getElementById("table-t");

                $.ajax({
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    url: "http://localhost:8080/page",
                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                    success: function(msg) {
                        var str = "";
                        for (let i = 0; i < msg.length; i++) {
                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                "</tr>"
                        }

                        tbody.innerHTML = str;
                    },
                    error: function() {
                        alert("失败");
                    }
                })
            } else {
                if (selectArea == "V10011") {

                    document.getElementById("table-a").style.display = "none";
                    document.getElementById("table-result").style.display = "none";
                    document.getElementById("table").style.display = "none";
                    document.getElementById("table-b").style.display = "";
                    document.getElementById("table-c").style.display = "none";
                    document.getElementById("table-g").style.display = "none";
                    document.getElementById("table-d").style.display = "none";
                    document.getElementById("table-e").style.display = "none";
                    document.getElementById("table-f").style.display = "none";
                    var tbody = window.document.getElementById("tbody-b");

                    $.ajax({
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: "http://localhost:8080/page",
                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                        success: function(msg) {
                            var str = "";
                            for (let i = 0; i < msg.length; i++) {
                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                    "</tr>"
                            }

                            tbody.innerHTML = str;
                        },
                        error: function() {
                            alert("失败");
                        }
                    })
                } else {
                    if (selectArea == "V10012") {

                        document.getElementById("table-a").style.display = "none";
                        document.getElementById("table-result").style.display = "none";
                        document.getElementById("table").style.display = "none";
                        document.getElementById("table-b").style.display = "none";
                        document.getElementById("table-c").style.display = "";
                        document.getElementById("table-g").style.display = "none";
                        document.getElementById("table-d").style.display = "none";
                        document.getElementById("table-e").style.display = "none";
                        document.getElementById("table-f").style.display = "none";
                        var tbody = window.document.getElementById("tbody-c");

                        $.ajax({
                            type: "post",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            url: "http://localhost:8080/page",
                            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                            success: function(msg) {
                                var str = "";
                                for (let i = 0; i < msg.length; i++) {
                                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                        "<td align='center'>" + msg[i].t1 + "</td>" +
                                        "<td align='center'>" + msg[i].t2 + "</td>" +
                                        "<td align='center'>" + msg[i].t3 + "</td>" +
                                        "<td align='center'>" + msg[i].t4 + "</td>" +
                                        "<td align='center'>" + msg[i].t5 + "</td>" +
                                        "<td align='center'>" + msg[i].t6 + "</td>" +
                                        "<td align='center'>" + msg[i].t7 + "</td>" +
                                        "<td align='center'>" + msg[i].t8 + "</td>" +
                                        "<td align='center'>" + msg[i].t9 + "</td>" +
                                        "<td align='center'>" + msg[i].t10 + "</td>" +
                                        "<td align='center'>" + msg[i].t11 + "</td>" +
                                        "<td align='center'>" + msg[i].t12 + "</td>" +
                                        "<td align='center'>" + msg[i].t13 + "</td>" +
                                        "<td align='center'>" + msg[i].t14 + "</td>" +
                                        "<td align='center'>" + msg[i].t15 + "</td>" +
                                        "<td align='center'>" + msg[i].t16 + "</td>" +
                                        "<td align='center'>" + msg[i].t17 + "</td>" +
                                        "<td align='center'>" + msg[i].t18 + "</td>" +
                                        "<td align='center'>" + msg[i].t19 + "</td>" +
                                        "<td align='center'>" + msg[i].t20 + "</td>" +
                                        "<td align='center'>" + msg[i].t21 + "</td>" +
                                        "<td align='center'>" + msg[i].t22 + "</td>" +
                                        "<td align='center'>" + msg[i].t23 + "</td>" +
                                        "<td align='center'>" + msg[i].t24 + "</td>" +
                                        "<td align='center'>" + msg[i].t25 + "</td>" +
                                        "<td align='center'>" + msg[i].t26 + "</td>" +
                                        "<td align='center'>" + msg[i].t27 + "</td>" +
                                        "<td align='center'>" + msg[i].t28 + "</td>" +
                                        "<td align='center'>" + msg[i].t29 + "</td>" +
                                        "<td align='center'>" + msg[i].t30 + "</td>" +
                                        "<td align='center'>" + msg[i].t31 + "</td>" +
                                        "<td align='center'>" + msg[i].t32 + "</td>" +
                                        "<td align='center'>" + msg[i].t33 + "</td>" +
                                        "</tr>"
                                }

                                tbody.innerHTML = str;
                            },
                            error: function() {
                                alert("失败");
                            }
                        })

                    } else {
                        if (V2.indexOf(selectArea) > 0) {

                            document.getElementById("table-a").style.display = "none";
                            document.getElementById("table-result").style.display = "none";
                            document.getElementById("table").style.display = "none";
                            document.getElementById("table-b").style.display = "none";
                            document.getElementById("table-c").style.display = "none";
                            document.getElementById("table-g").style.display = "";
                            document.getElementById("table-d").style.display = "none";
                            document.getElementById("table-e").style.display = "none";
                            document.getElementById("table-f").style.display = "none";
                            var tbody = window.document.getElementById("tbody-g");

                            $.ajax({
                                type: "post",
                                dataType: "json",
                                contentType: "application/json;charset=utf-8",
                                url: "http://localhost:8080/page",
                                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                success: function(msg) {
                                    var str = "";
                                    for (let i = 0; i < msg.length; i++) {
                                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                            "<td align='center'>" + msg[i].t1 + "</td>" +
                                            "<td align='center'>" + msg[i].t2 + "</td>" +
                                            "<td align='center'>" + msg[i].t3 + "</td>" +
                                            "<td align='center'>" + msg[i].t4 + "</td>" +
                                            "<td align='center'>" + msg[i].t5 + "</td>" +
                                            "<td align='center'>" + msg[i].t6 + "</td>" +
                                            "<td align='center'>" + msg[i].t7 + "</td>" +
                                            "<td align='center'>" + msg[i].t8 + "</td>" +
                                            "<td align='center'>" + msg[i].t9 + "</td>" +
                                            "<td align='center'>" + msg[i].t10 + "</td>" +
                                            "<td align='center'>" + msg[i].t11 + "</td>" +
                                            "<td align='center'>" + msg[i].t12 + "</td>" +
                                            "<td align='center'>" + msg[i].t13 + "</td>" +
                                            "<td align='center'>" + msg[i].t14 + "</td>" +
                                            "<td align='center'>" + msg[i].t15 + "</td>" +
                                            "<td align='center'>" + msg[i].t16 + "</td>" +
                                            "<td align='center'>" + msg[i].t17 + "</td>" +
                                            "<td align='center'>" + msg[i].t18 + "</td>" +
                                            "<td align='center'>" + msg[i].t19 + "</td>" +
                                            "<td align='center'>" + msg[i].t20 + "</td>" +
                                            "<td align='center'>" + msg[i].t21 + "</td>" +
                                            "<td align='center'>" + msg[i].t22 + "</td>" +
                                            "<td align='center'>" + msg[i].t23 + "</td>" +
                                            "<td align='center'>" + msg[i].t24 + "</td>" +
                                            "<td align='center'>" + msg[i].t25 + "</td>" +
                                            "<td align='center'>" + msg[i].t26 + "</td>" +
                                            "<td align='center'>" + msg[i].t27 + "</td>" +
                                            "<td align='center'>" + msg[i].t28 + "</td>" +
                                            "<td align='center'>" + msg[i].t29 + "</td>" +
                                            "<td align='center'>" + msg[i].t30 + "</td>" +
                                            "<td align='center'>" + msg[i].t31 + "</td>" +
                                            "<td align='center'>" + msg[i].t32 + "</td>" +
                                            "<td align='center'>" + msg[i].t33 + "</td>" +
                                            "<td align='center'>" + msg[i].t34 + "</td>" +
                                            "</tr>"
                                    }

                                    tbody.innerHTML = str;
                                },
                                error: function() {
                                    alert("失败");
                                }
                            })

                        } else {
                            if (selectArea == "V10010") {

                                document.getElementById("table-a").style.display = "none";
                                document.getElementById("table-result").style.display = "none";
                                document.getElementById("table").style.display = "none";
                                document.getElementById("table-b").style.display = "none";
                                document.getElementById("table-c").style.display = "none";
                                document.getElementById("table-g").style.display = "none";
                                document.getElementById("table-d").style.display = "";
                                document.getElementById("table-e").style.display = "none";
                                document.getElementById("table-f").style.display = "none";
                                var tbody = window.document.getElementById("tbody-d");

                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/json;charset=utf-8",
                                    url: "http://localhost:8080/page",
                                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                    success: function(msg) {
                                        var str = "";
                                        for (let i = 0; i < msg.length; i++) {
                                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                                "<td align='center'>" + msg[i].t24 + "</td>" +
                                                "<td align='center'>" + msg[i].t25 + "</td>" +
                                                "<td align='center'>" + msg[i].t26 + "</td>" +
                                                "<td align='center'>" + msg[i].t27 + "</td>" +
                                                "<td align='center'>" + msg[i].t28 + "</td>" +
                                                "<td align='center'>" + msg[i].t29 + "</td>" +
                                                "<td align='center'>" + msg[i].t30 + "</td>" +
                                                "<td align='center'>" + msg[i].t31 + "</td>" +
                                                "<td align='center'>" + msg[i].t32 + "</td>" +
                                                "<td align='center'>" + msg[i].t33 + "</td>" +
                                                "<td align='center'>" + msg[i].t34 + "</td>" +
                                                "<td align='center'>" + msg[i].t35 + "</td>" +
                                                "</tr>"
                                        }

                                        tbody.innerHTML = str;
                                    },
                                    error: function() {
                                        alert("失败");
                                    }
                                })

                            } else {
                                if (selectArea == "V10016") {
                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "";
                                    document.getElementById("table-f").style.display = "none";
                                    var tbody = window.document.getElementById("tbody-e");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                } else {

                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "none";
                                    document.getElementById("table-f").style.display = "";
                                    var tbody = window.document.getElementById("tbody-f");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "<td align='center'>" + msg[i].t38 + "</td>" +
                                                    "<td align='center'>" + msg[i].t39 + "</td>" +
                                                    "<td align='center'>" + msg[i].t40 + "</td>" +
                                                    "<td align='center'>" + msg[i].t41 + "</td>" +
                                                    "<td align='center'>" + msg[i].t42 + "</td>" +
                                                    "<td align='center'>" + msg[i].t43 + "</td>" +
                                                    "<td align='center'>" + msg[i].t44 + "</td>" +
                                                    "<td align='center'>" + msg[i].t45 + "</td>" +
                                                    "<td align='center'>" + msg[i].t46 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function last() {
    var nextpage = parseInt(document.getElementById("Pagecount").value);
    var begin = nextpage;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = nextpage;
    var V1 = ["V", "V10001", "V10002", "V10003"];
    var V2 = ["V", "V10005", "V10006", "V10007", "V10008", "V10009", "V10025", "V10024"];
    var V3 = ["V", "V10013", "V10014", "V10015"];
    var map = {
        V10000: '碧桂园',
        V10004: '人杰',
        V10020: '北苑',
        V10011: '碧桂园北区',
        V10012: '碧桂园别墅区',
        V10010: '碧桂园南区',
        V10016: '人杰一期',
        V10013: '明发',
        V10001: '翰博三期',
        V10002: '翰博二期',
        V10003: '丽景',
        V10004: '宏颐',
        V10006: '府梓',
        V10007: '绿茵',
        V10008: '人杰二期',
        V10009: '碧桂园高层',
        V10014: '太湖一期',
        V10015: '太湖二期',
        V10017: '亚太换一期',
        V10018: '亚太换二期',
        V10019: '碧桂园西区',
        V10021: '亚泰三期',
        V10022: '翰博皇家御湾',
        V10023: '太湖明珠',
        V10024: '碧桂园东北区',
        V10025: '博物馆',
    }
    $('span').empty();
    document.getElementById("span").append(map[selectArea] + "数据表格如下：")

    if (selectArea == "V10020") {
        document.getElementById("table-a").style.display = "";
        document.getElementById("table-result").style.display = "none";
        document.getElementById("table").style.display = "none";
        document.getElementById("table-b").style.display = "none";
        document.getElementById("table-c").style.display = "none";
        document.getElementById("table-g").style.display = "none";
        document.getElementById("table-d").style.display = "none";
        document.getElementById("table-e").style.display = "none";
        document.getElementById("table-f").style.display = "none";
        var tbody = window.document.getElementById("tbody-a");

        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/page",
            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
            success: function(msg) {
                var str = "";
                for (let i = 0; i < msg.length; i++) {
                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                        "<td align='center'>" + msg[i].t1 + "</td>" +
                        "<td align='center'>" + msg[i].t2 + "</td>" +
                        "<td align='center'>" + msg[i].t3 + "</td>" +
                        "<td align='center'>" + msg[i].t4 + "</td>" +
                        "<td align='center'>" + msg[i].t5 + "</td>" +
                        "<td align='center'>" + msg[i].t6 + "</td>" +
                        "<td align='center'>" + msg[i].t7 + "</td>" +
                        "<td align='center'>" + msg[i].t8 + "</td>" +
                        "<td align='center'>" + msg[i].t9 + "</td>" +
                        "<td align='center'>" + msg[i].t10 + "</td>" +
                        "<td align='center'>" + msg[i].t11 + "</td>" +
                        "<td align='center'>" + msg[i].t12 + "</td>" +
                        "<td align='center'>" + msg[i].t13 + "</td>" +
                        "<td align='center'>" + msg[i].t14 + "</td>" +
                        "<td align='center'>" + msg[i].t15 + "</td>" +
                        "<td align='center'>" + msg[i].t16 + "</td>" +
                        "<td align='center'>" + msg[i].t17 + "</td>" +
                        "</tr>"
                }

                tbody.innerHTML = str;
            },
            error: function() {
                alert("失败");
            }
        })
    } else {
        if (V1.indexOf(selectArea) > 0) {

            document.getElementById("table-a").style.display = "none";
            document.getElementById("table-result").style.display = "";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-b").style.display = "none";
            document.getElementById("table-c").style.display = "none";
            document.getElementById("table-g").style.display = "none";
            document.getElementById("table-d").style.display = "none";
            document.getElementById("table-e").style.display = "none";
            document.getElementById("table-f").style.display = "none";
            var tbody = window.document.getElementById("tbody-result");


            $.ajax({
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                url: "http://localhost:8080/page",
                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                success: function(msg) {
                    var str = "";
                    for (let i = 0; i < msg.length; i++) {
                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                            "<td align='center'>" + msg[i].t1 + "</td>" +
                            "<td align='center'>" + msg[i].t2 + "</td>" +
                            "<td align='center'>" + msg[i].t3 + "</td>" +
                            "<td align='center'>" + msg[i].t4 + "</td>" +
                            "<td align='center'>" + msg[i].t5 + "</td>" +
                            "<td align='center'>" + msg[i].t6 + "</td>" +
                            "<td align='center'>" + msg[i].t7 + "</td>" +
                            "<td align='center'>" + msg[i].t8 + "</td>" +
                            "<td align='center'>" + msg[i].t9 + "</td>" +
                            "<td align='center'>" + msg[i].t10 + "</td>" +
                            "<td align='center'>" + msg[i].t11 + "</td>" +
                            "<td align='center'>" + msg[i].t12 + "</td>" +
                            "<td align='center'>" + msg[i].t13 + "</td>" +
                            "<td align='center'>" + msg[i].t14 + "</td>" +
                            "<td align='center'>" + msg[i].t15 + "</td>" +
                            "<td align='center'>" + msg[i].t16 + "</td>" +
                            "<td align='center'>" + msg[i].t17 + "</td>" +
                            "<td align='center'>" + msg[i].t18 + "</td>" +
                            "<td align='center'>" + msg[i].t19 + "</td>" +
                            "<td align='center'>" + msg[i].t20 + "</td>" +
                            "<td align='center'>" + msg[i].t21 + "</td>" +
                            "<td align='center'>" + msg[i].t22 + "</td>" +
                            "</tr>"
                    }

                    tbody.innerHTML = str;
                },
                error: function() {
                    alert("失败");
                }
            })
        } else {
            if (selectArea == "V10004") {

                document.getElementById("table-a").style.display = "none";
                document.getElementById("table-result").style.display = "none";
                document.getElementById("table").style.display = "";
                document.getElementById("table-b").style.display = "none";
                document.getElementById("table-c").style.display = "none";
                document.getElementById("table-g").style.display = "none";
                document.getElementById("table-d").style.display = "none";
                document.getElementById("table-e").style.display = "none";
                document.getElementById("table-f").style.display = "none";
                var tbody = window.document.getElementById("table-t");

                $.ajax({
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    url: "http://localhost:8080/page",
                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                    success: function(msg) {
                        var str = "";
                        for (let i = 0; i < msg.length; i++) {
                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                "</tr>"
                        }

                        tbody.innerHTML = str;
                    },
                    error: function() {
                        alert("失败");
                    }
                })
            } else {
                if (selectArea == "V10011") {

                    document.getElementById("table-a").style.display = "none";
                    document.getElementById("table-result").style.display = "none";
                    document.getElementById("table").style.display = "none";
                    document.getElementById("table-b").style.display = "";
                    document.getElementById("table-c").style.display = "none";
                    document.getElementById("table-g").style.display = "none";
                    document.getElementById("table-d").style.display = "none";
                    document.getElementById("table-e").style.display = "none";
                    document.getElementById("table-f").style.display = "none";
                    var tbody = window.document.getElementById("tbody-b");

                    $.ajax({
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: "http://localhost:8080/page",
                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                        success: function(msg) {
                            var str = "";
                            for (let i = 0; i < msg.length; i++) {
                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                    "</tr>"
                            }

                            tbody.innerHTML = str;
                        },
                        error: function() {
                            alert("失败");
                        }
                    })
                } else {
                    if (selectArea == "V10012") {

                        document.getElementById("table-a").style.display = "none";
                        document.getElementById("table-result").style.display = "none";
                        document.getElementById("table").style.display = "none";
                        document.getElementById("table-b").style.display = "none";
                        document.getElementById("table-c").style.display = "";
                        document.getElementById("table-g").style.display = "none";
                        document.getElementById("table-d").style.display = "none";
                        document.getElementById("table-e").style.display = "none";
                        document.getElementById("table-f").style.display = "none";
                        var tbody = window.document.getElementById("tbody-c");

                        $.ajax({
                            type: "post",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            url: "http://localhost:8080/page",
                            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                            success: function(msg) {
                                var str = "";
                                for (let i = 0; i < msg.length; i++) {
                                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                        "<td align='center'>" + msg[i].t1 + "</td>" +
                                        "<td align='center'>" + msg[i].t2 + "</td>" +
                                        "<td align='center'>" + msg[i].t3 + "</td>" +
                                        "<td align='center'>" + msg[i].t4 + "</td>" +
                                        "<td align='center'>" + msg[i].t5 + "</td>" +
                                        "<td align='center'>" + msg[i].t6 + "</td>" +
                                        "<td align='center'>" + msg[i].t7 + "</td>" +
                                        "<td align='center'>" + msg[i].t8 + "</td>" +
                                        "<td align='center'>" + msg[i].t9 + "</td>" +
                                        "<td align='center'>" + msg[i].t10 + "</td>" +
                                        "<td align='center'>" + msg[i].t11 + "</td>" +
                                        "<td align='center'>" + msg[i].t12 + "</td>" +
                                        "<td align='center'>" + msg[i].t13 + "</td>" +
                                        "<td align='center'>" + msg[i].t14 + "</td>" +
                                        "<td align='center'>" + msg[i].t15 + "</td>" +
                                        "<td align='center'>" + msg[i].t16 + "</td>" +
                                        "<td align='center'>" + msg[i].t17 + "</td>" +
                                        "<td align='center'>" + msg[i].t18 + "</td>" +
                                        "<td align='center'>" + msg[i].t19 + "</td>" +
                                        "<td align='center'>" + msg[i].t20 + "</td>" +
                                        "<td align='center'>" + msg[i].t21 + "</td>" +
                                        "<td align='center'>" + msg[i].t22 + "</td>" +
                                        "<td align='center'>" + msg[i].t23 + "</td>" +
                                        "<td align='center'>" + msg[i].t24 + "</td>" +
                                        "<td align='center'>" + msg[i].t25 + "</td>" +
                                        "<td align='center'>" + msg[i].t26 + "</td>" +
                                        "<td align='center'>" + msg[i].t27 + "</td>" +
                                        "<td align='center'>" + msg[i].t28 + "</td>" +
                                        "<td align='center'>" + msg[i].t29 + "</td>" +
                                        "<td align='center'>" + msg[i].t30 + "</td>" +
                                        "<td align='center'>" + msg[i].t31 + "</td>" +
                                        "<td align='center'>" + msg[i].t32 + "</td>" +
                                        "<td align='center'>" + msg[i].t33 + "</td>" +
                                        "</tr>"
                                }

                                tbody.innerHTML = str;
                            },
                            error: function() {
                                alert("失败");
                            }
                        })

                    } else {
                        if (V2.indexOf(selectArea) > 0) {

                            document.getElementById("table-a").style.display = "none";
                            document.getElementById("table-result").style.display = "none";
                            document.getElementById("table").style.display = "none";
                            document.getElementById("table-b").style.display = "none";
                            document.getElementById("table-c").style.display = "none";
                            document.getElementById("table-g").style.display = "";
                            document.getElementById("table-d").style.display = "none";
                            document.getElementById("table-e").style.display = "none";
                            document.getElementById("table-f").style.display = "none";
                            var tbody = window.document.getElementById("tbody-g");

                            $.ajax({
                                type: "post",
                                dataType: "json",
                                contentType: "application/json;charset=utf-8",
                                url: "http://localhost:8080/page",
                                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                success: function(msg) {
                                    var str = "";
                                    for (let i = 0; i < msg.length; i++) {
                                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                            "<td align='center'>" + msg[i].t1 + "</td>" +
                                            "<td align='center'>" + msg[i].t2 + "</td>" +
                                            "<td align='center'>" + msg[i].t3 + "</td>" +
                                            "<td align='center'>" + msg[i].t4 + "</td>" +
                                            "<td align='center'>" + msg[i].t5 + "</td>" +
                                            "<td align='center'>" + msg[i].t6 + "</td>" +
                                            "<td align='center'>" + msg[i].t7 + "</td>" +
                                            "<td align='center'>" + msg[i].t8 + "</td>" +
                                            "<td align='center'>" + msg[i].t9 + "</td>" +
                                            "<td align='center'>" + msg[i].t10 + "</td>" +
                                            "<td align='center'>" + msg[i].t11 + "</td>" +
                                            "<td align='center'>" + msg[i].t12 + "</td>" +
                                            "<td align='center'>" + msg[i].t13 + "</td>" +
                                            "<td align='center'>" + msg[i].t14 + "</td>" +
                                            "<td align='center'>" + msg[i].t15 + "</td>" +
                                            "<td align='center'>" + msg[i].t16 + "</td>" +
                                            "<td align='center'>" + msg[i].t17 + "</td>" +
                                            "<td align='center'>" + msg[i].t18 + "</td>" +
                                            "<td align='center'>" + msg[i].t19 + "</td>" +
                                            "<td align='center'>" + msg[i].t20 + "</td>" +
                                            "<td align='center'>" + msg[i].t21 + "</td>" +
                                            "<td align='center'>" + msg[i].t22 + "</td>" +
                                            "<td align='center'>" + msg[i].t23 + "</td>" +
                                            "<td align='center'>" + msg[i].t24 + "</td>" +
                                            "<td align='center'>" + msg[i].t25 + "</td>" +
                                            "<td align='center'>" + msg[i].t26 + "</td>" +
                                            "<td align='center'>" + msg[i].t27 + "</td>" +
                                            "<td align='center'>" + msg[i].t28 + "</td>" +
                                            "<td align='center'>" + msg[i].t29 + "</td>" +
                                            "<td align='center'>" + msg[i].t30 + "</td>" +
                                            "<td align='center'>" + msg[i].t31 + "</td>" +
                                            "<td align='center'>" + msg[i].t32 + "</td>" +
                                            "<td align='center'>" + msg[i].t33 + "</td>" +
                                            "<td align='center'>" + msg[i].t34 + "</td>" +
                                            "</tr>"
                                    }

                                    tbody.innerHTML = str;
                                },
                                error: function() {
                                    alert("失败");
                                }
                            })

                        } else {
                            if (selectArea == "V10010") {

                                document.getElementById("table-a").style.display = "none";
                                document.getElementById("table-result").style.display = "none";
                                document.getElementById("table").style.display = "none";
                                document.getElementById("table-b").style.display = "none";
                                document.getElementById("table-c").style.display = "none";
                                document.getElementById("table-g").style.display = "none";
                                document.getElementById("table-d").style.display = "";
                                document.getElementById("table-e").style.display = "none";
                                document.getElementById("table-f").style.display = "none";
                                var tbody = window.document.getElementById("tbody-d");

                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/json;charset=utf-8",
                                    url: "http://localhost:8080/page",
                                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                    success: function(msg) {
                                        var str = "";
                                        for (let i = 0; i < msg.length; i++) {
                                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                                "<td align='center'>" + msg[i].t24 + "</td>" +
                                                "<td align='center'>" + msg[i].t25 + "</td>" +
                                                "<td align='center'>" + msg[i].t26 + "</td>" +
                                                "<td align='center'>" + msg[i].t27 + "</td>" +
                                                "<td align='center'>" + msg[i].t28 + "</td>" +
                                                "<td align='center'>" + msg[i].t29 + "</td>" +
                                                "<td align='center'>" + msg[i].t30 + "</td>" +
                                                "<td align='center'>" + msg[i].t31 + "</td>" +
                                                "<td align='center'>" + msg[i].t32 + "</td>" +
                                                "<td align='center'>" + msg[i].t33 + "</td>" +
                                                "<td align='center'>" + msg[i].t34 + "</td>" +
                                                "<td align='center'>" + msg[i].t35 + "</td>" +
                                                "</tr>"
                                        }

                                        tbody.innerHTML = str;
                                    },
                                    error: function() {
                                        alert("失败");
                                    }
                                })

                            } else {
                                if (selectArea == "V10016") {
                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "";
                                    document.getElementById("table-f").style.display = "none";
                                    var tbody = window.document.getElementById("tbody-e");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                } else {

                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "none";
                                    document.getElementById("table-f").style.display = "";
                                    var tbody = window.document.getElementById("tbody-f");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "<td align='center'>" + msg[i].t38 + "</td>" +
                                                    "<td align='center'>" + msg[i].t39 + "</td>" +
                                                    "<td align='center'>" + msg[i].t40 + "</td>" +
                                                    "<td align='center'>" + msg[i].t41 + "</td>" +
                                                    "<td align='center'>" + msg[i].t42 + "</td>" +
                                                    "<td align='center'>" + msg[i].t43 + "</td>" +
                                                    "<td align='center'>" + msg[i].t44 + "</td>" +
                                                    "<td align='center'>" + msg[i].t45 + "</td>" +
                                                    "<td align='center'>" + msg[i].t46 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function GoPage() {
    var nextpage = parseInt(document.getElementById("nowpage").value);
    var begin = nextpage;
    var end = begin * 20;
    console.log("begin:" + begin);
    console.log("end:" + end);

    console.log(nextpage);
    console.log(document.getElementById("selectArea").value);
    var selectArea = document.getElementById("selectArea").value;
    var selectDate = document.getElementById("selectDate").value;
    var tbody = window.document.getElementById("tbody-a");
    document.getElementById("nowpage").value = nextpage;
    var V1 = ["V", "V10001", "V10002", "V10003"];
    var V2 = ["V", "V10005", "V10006", "V10007", "V10008", "V10009", "V10025", "V10024"];
    var V3 = ["V", "V10013", "V10014", "V10015"];
    var map = {
        V10000: '碧桂园',
        V10004: '人杰',
        V10020: '北苑',
        V10011: '碧桂园北区',
        V10012: '碧桂园别墅区',
        V10010: '碧桂园南区',
        V10016: '人杰一期',
        V10013: '明发',
        V10001: '翰博三期',
        V10002: '翰博二期',
        V10003: '丽景',
        V10004: '宏颐',
        V10006: '府梓',
        V10007: '绿茵',
        V10008: '人杰二期',
        V10009: '碧桂园高层',
        V10014: '太湖一期',
        V10015: '太湖二期',
        V10017: '亚太换一期',
        V10018: '亚太换二期',
        V10019: '碧桂园西区',
        V10021: '亚泰三期',
        V10022: '翰博皇家御湾',
        V10023: '太湖明珠',
        V10024: '碧桂园东北区',
        V10025: '博物馆',
    }
    $('span').empty();
    document.getElementById("span").append(map[selectArea] + "数据表格如下：")

    if (selectArea == "V10020") {
        document.getElementById("table-a").style.display = "";
        document.getElementById("table-result").style.display = "none";
        document.getElementById("table").style.display = "none";
        document.getElementById("table-b").style.display = "none";
        document.getElementById("table-c").style.display = "none";
        document.getElementById("table-g").style.display = "none";
        document.getElementById("table-d").style.display = "none";
        document.getElementById("table-e").style.display = "none";
        document.getElementById("table-f").style.display = "none";
        var tbody = window.document.getElementById("tbody-a");

        $.ajax({
            type: "post",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/page",
            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
            success: function(msg) {
                var str = "";
                for (let i = 0; i < msg.length; i++) {
                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                        "<td align='center'>" + msg[i].t1 + "</td>" +
                        "<td align='center'>" + msg[i].t2 + "</td>" +
                        "<td align='center'>" + msg[i].t3 + "</td>" +
                        "<td align='center'>" + msg[i].t4 + "</td>" +
                        "<td align='center'>" + msg[i].t5 + "</td>" +
                        "<td align='center'>" + msg[i].t6 + "</td>" +
                        "<td align='center'>" + msg[i].t7 + "</td>" +
                        "<td align='center'>" + msg[i].t8 + "</td>" +
                        "<td align='center'>" + msg[i].t9 + "</td>" +
                        "<td align='center'>" + msg[i].t10 + "</td>" +
                        "<td align='center'>" + msg[i].t11 + "</td>" +
                        "<td align='center'>" + msg[i].t12 + "</td>" +
                        "<td align='center'>" + msg[i].t13 + "</td>" +
                        "<td align='center'>" + msg[i].t14 + "</td>" +
                        "<td align='center'>" + msg[i].t15 + "</td>" +
                        "<td align='center'>" + msg[i].t16 + "</td>" +
                        "<td align='center'>" + msg[i].t17 + "</td>" +
                        "</tr>"
                }

                tbody.innerHTML = str;
            },
            error: function() {
                alert("失败");
            }
        })
    } else {
        if (V1.indexOf(selectArea) > 0) {

            document.getElementById("table-a").style.display = "none";
            document.getElementById("table-result").style.display = "";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-b").style.display = "none";
            document.getElementById("table-c").style.display = "none";
            document.getElementById("table-g").style.display = "none";
            document.getElementById("table-d").style.display = "none";
            document.getElementById("table-e").style.display = "none";
            document.getElementById("table-f").style.display = "none";
            var tbody = window.document.getElementById("tbody-result");


            $.ajax({
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                url: "http://localhost:8080/page",
                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                success: function(msg) {
                    var str = "";
                    for (let i = 0; i < msg.length; i++) {
                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                            "<td align='center'>" + msg[i].t1 + "</td>" +
                            "<td align='center'>" + msg[i].t2 + "</td>" +
                            "<td align='center'>" + msg[i].t3 + "</td>" +
                            "<td align='center'>" + msg[i].t4 + "</td>" +
                            "<td align='center'>" + msg[i].t5 + "</td>" +
                            "<td align='center'>" + msg[i].t6 + "</td>" +
                            "<td align='center'>" + msg[i].t7 + "</td>" +
                            "<td align='center'>" + msg[i].t8 + "</td>" +
                            "<td align='center'>" + msg[i].t9 + "</td>" +
                            "<td align='center'>" + msg[i].t10 + "</td>" +
                            "<td align='center'>" + msg[i].t11 + "</td>" +
                            "<td align='center'>" + msg[i].t12 + "</td>" +
                            "<td align='center'>" + msg[i].t13 + "</td>" +
                            "<td align='center'>" + msg[i].t14 + "</td>" +
                            "<td align='center'>" + msg[i].t15 + "</td>" +
                            "<td align='center'>" + msg[i].t16 + "</td>" +
                            "<td align='center'>" + msg[i].t17 + "</td>" +
                            "<td align='center'>" + msg[i].t18 + "</td>" +
                            "<td align='center'>" + msg[i].t19 + "</td>" +
                            "<td align='center'>" + msg[i].t20 + "</td>" +
                            "<td align='center'>" + msg[i].t21 + "</td>" +
                            "<td align='center'>" + msg[i].t22 + "</td>" +
                            "</tr>"
                    }

                    tbody.innerHTML = str;
                },
                error: function() {
                    alert("失败");
                }
            })
        } else {
            if (selectArea == "V10004") {

                document.getElementById("table-a").style.display = "none";
                document.getElementById("table-result").style.display = "none";
                document.getElementById("table").style.display = "";
                document.getElementById("table-b").style.display = "none";
                document.getElementById("table-c").style.display = "none";
                document.getElementById("table-g").style.display = "none";
                document.getElementById("table-d").style.display = "none";
                document.getElementById("table-e").style.display = "none";
                document.getElementById("table-f").style.display = "none";
                var tbody = window.document.getElementById("table-t");

                $.ajax({
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    url: "http://localhost:8080/page",
                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                    success: function(msg) {
                        var str = "";
                        for (let i = 0; i < msg.length; i++) {
                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                "</tr>"
                        }

                        tbody.innerHTML = str;
                    },
                    error: function() {
                        alert("失败");
                    }
                })
            } else {
                if (selectArea == "V10011") {

                    document.getElementById("table-a").style.display = "none";
                    document.getElementById("table-result").style.display = "none";
                    document.getElementById("table").style.display = "none";
                    document.getElementById("table-b").style.display = "";
                    document.getElementById("table-c").style.display = "none";
                    document.getElementById("table-g").style.display = "none";
                    document.getElementById("table-d").style.display = "none";
                    document.getElementById("table-e").style.display = "none";
                    document.getElementById("table-f").style.display = "none";
                    var tbody = window.document.getElementById("tbody-b");

                    $.ajax({
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: "http://localhost:8080/page",
                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                        success: function(msg) {
                            var str = "";
                            for (let i = 0; i < msg.length; i++) {
                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                    "</tr>"
                            }

                            tbody.innerHTML = str;
                        },
                        error: function() {
                            alert("失败");
                        }
                    })
                } else {
                    if (selectArea == "V10012") {

                        document.getElementById("table-a").style.display = "none";
                        document.getElementById("table-result").style.display = "none";
                        document.getElementById("table").style.display = "none";
                        document.getElementById("table-b").style.display = "none";
                        document.getElementById("table-c").style.display = "";
                        document.getElementById("table-g").style.display = "none";
                        document.getElementById("table-d").style.display = "none";
                        document.getElementById("table-e").style.display = "none";
                        document.getElementById("table-f").style.display = "none";
                        var tbody = window.document.getElementById("tbody-c");

                        $.ajax({
                            type: "post",
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            url: "http://localhost:8080/page",
                            data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                            success: function(msg) {
                                var str = "";
                                for (let i = 0; i < msg.length; i++) {
                                    str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                        "<td align='center'>" + msg[i].t1 + "</td>" +
                                        "<td align='center'>" + msg[i].t2 + "</td>" +
                                        "<td align='center'>" + msg[i].t3 + "</td>" +
                                        "<td align='center'>" + msg[i].t4 + "</td>" +
                                        "<td align='center'>" + msg[i].t5 + "</td>" +
                                        "<td align='center'>" + msg[i].t6 + "</td>" +
                                        "<td align='center'>" + msg[i].t7 + "</td>" +
                                        "<td align='center'>" + msg[i].t8 + "</td>" +
                                        "<td align='center'>" + msg[i].t9 + "</td>" +
                                        "<td align='center'>" + msg[i].t10 + "</td>" +
                                        "<td align='center'>" + msg[i].t11 + "</td>" +
                                        "<td align='center'>" + msg[i].t12 + "</td>" +
                                        "<td align='center'>" + msg[i].t13 + "</td>" +
                                        "<td align='center'>" + msg[i].t14 + "</td>" +
                                        "<td align='center'>" + msg[i].t15 + "</td>" +
                                        "<td align='center'>" + msg[i].t16 + "</td>" +
                                        "<td align='center'>" + msg[i].t17 + "</td>" +
                                        "<td align='center'>" + msg[i].t18 + "</td>" +
                                        "<td align='center'>" + msg[i].t19 + "</td>" +
                                        "<td align='center'>" + msg[i].t20 + "</td>" +
                                        "<td align='center'>" + msg[i].t21 + "</td>" +
                                        "<td align='center'>" + msg[i].t22 + "</td>" +
                                        "<td align='center'>" + msg[i].t23 + "</td>" +
                                        "<td align='center'>" + msg[i].t24 + "</td>" +
                                        "<td align='center'>" + msg[i].t25 + "</td>" +
                                        "<td align='center'>" + msg[i].t26 + "</td>" +
                                        "<td align='center'>" + msg[i].t27 + "</td>" +
                                        "<td align='center'>" + msg[i].t28 + "</td>" +
                                        "<td align='center'>" + msg[i].t29 + "</td>" +
                                        "<td align='center'>" + msg[i].t30 + "</td>" +
                                        "<td align='center'>" + msg[i].t31 + "</td>" +
                                        "<td align='center'>" + msg[i].t32 + "</td>" +
                                        "<td align='center'>" + msg[i].t33 + "</td>" +
                                        "</tr>"
                                }

                                tbody.innerHTML = str;
                            },
                            error: function() {
                                alert("失败");
                            }
                        })

                    } else {
                        if (V2.indexOf(selectArea) > 0) {

                            document.getElementById("table-a").style.display = "none";
                            document.getElementById("table-result").style.display = "none";
                            document.getElementById("table").style.display = "none";
                            document.getElementById("table-b").style.display = "none";
                            document.getElementById("table-c").style.display = "none";
                            document.getElementById("table-g").style.display = "";
                            document.getElementById("table-d").style.display = "none";
                            document.getElementById("table-e").style.display = "none";
                            document.getElementById("table-f").style.display = "none";
                            var tbody = window.document.getElementById("tbody-g");

                            $.ajax({
                                type: "post",
                                dataType: "json",
                                contentType: "application/json;charset=utf-8",
                                url: "http://localhost:8080/page",
                                data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                success: function(msg) {
                                    var str = "";
                                    for (let i = 0; i < msg.length; i++) {
                                        str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                            "<td align='center'>" + msg[i].t1 + "</td>" +
                                            "<td align='center'>" + msg[i].t2 + "</td>" +
                                            "<td align='center'>" + msg[i].t3 + "</td>" +
                                            "<td align='center'>" + msg[i].t4 + "</td>" +
                                            "<td align='center'>" + msg[i].t5 + "</td>" +
                                            "<td align='center'>" + msg[i].t6 + "</td>" +
                                            "<td align='center'>" + msg[i].t7 + "</td>" +
                                            "<td align='center'>" + msg[i].t8 + "</td>" +
                                            "<td align='center'>" + msg[i].t9 + "</td>" +
                                            "<td align='center'>" + msg[i].t10 + "</td>" +
                                            "<td align='center'>" + msg[i].t11 + "</td>" +
                                            "<td align='center'>" + msg[i].t12 + "</td>" +
                                            "<td align='center'>" + msg[i].t13 + "</td>" +
                                            "<td align='center'>" + msg[i].t14 + "</td>" +
                                            "<td align='center'>" + msg[i].t15 + "</td>" +
                                            "<td align='center'>" + msg[i].t16 + "</td>" +
                                            "<td align='center'>" + msg[i].t17 + "</td>" +
                                            "<td align='center'>" + msg[i].t18 + "</td>" +
                                            "<td align='center'>" + msg[i].t19 + "</td>" +
                                            "<td align='center'>" + msg[i].t20 + "</td>" +
                                            "<td align='center'>" + msg[i].t21 + "</td>" +
                                            "<td align='center'>" + msg[i].t22 + "</td>" +
                                            "<td align='center'>" + msg[i].t23 + "</td>" +
                                            "<td align='center'>" + msg[i].t24 + "</td>" +
                                            "<td align='center'>" + msg[i].t25 + "</td>" +
                                            "<td align='center'>" + msg[i].t26 + "</td>" +
                                            "<td align='center'>" + msg[i].t27 + "</td>" +
                                            "<td align='center'>" + msg[i].t28 + "</td>" +
                                            "<td align='center'>" + msg[i].t29 + "</td>" +
                                            "<td align='center'>" + msg[i].t30 + "</td>" +
                                            "<td align='center'>" + msg[i].t31 + "</td>" +
                                            "<td align='center'>" + msg[i].t32 + "</td>" +
                                            "<td align='center'>" + msg[i].t33 + "</td>" +
                                            "<td align='center'>" + msg[i].t34 + "</td>" +
                                            "</tr>"
                                    }

                                    tbody.innerHTML = str;
                                },
                                error: function() {
                                    alert("失败");
                                }
                            })

                        } else {
                            if (selectArea == "V10010") {

                                document.getElementById("table-a").style.display = "none";
                                document.getElementById("table-result").style.display = "none";
                                document.getElementById("table").style.display = "none";
                                document.getElementById("table-b").style.display = "none";
                                document.getElementById("table-c").style.display = "none";
                                document.getElementById("table-g").style.display = "none";
                                document.getElementById("table-d").style.display = "";
                                document.getElementById("table-e").style.display = "none";
                                document.getElementById("table-f").style.display = "none";
                                var tbody = window.document.getElementById("tbody-d");

                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/json;charset=utf-8",
                                    url: "http://localhost:8080/page",
                                    data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                    success: function(msg) {
                                        var str = "";
                                        for (let i = 0; i < msg.length; i++) {
                                            str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                "<td align='center'>" + msg[i].t1 + "</td>" +
                                                "<td align='center'>" + msg[i].t2 + "</td>" +
                                                "<td align='center'>" + msg[i].t3 + "</td>" +
                                                "<td align='center'>" + msg[i].t4 + "</td>" +
                                                "<td align='center'>" + msg[i].t5 + "</td>" +
                                                "<td align='center'>" + msg[i].t6 + "</td>" +
                                                "<td align='center'>" + msg[i].t7 + "</td>" +
                                                "<td align='center'>" + msg[i].t8 + "</td>" +
                                                "<td align='center'>" + msg[i].t9 + "</td>" +
                                                "<td align='center'>" + msg[i].t10 + "</td>" +
                                                "<td align='center'>" + msg[i].t11 + "</td>" +
                                                "<td align='center'>" + msg[i].t12 + "</td>" +
                                                "<td align='center'>" + msg[i].t13 + "</td>" +
                                                "<td align='center'>" + msg[i].t14 + "</td>" +
                                                "<td align='center'>" + msg[i].t15 + "</td>" +
                                                "<td align='center'>" + msg[i].t16 + "</td>" +
                                                "<td align='center'>" + msg[i].t17 + "</td>" +
                                                "<td align='center'>" + msg[i].t18 + "</td>" +
                                                "<td align='center'>" + msg[i].t19 + "</td>" +
                                                "<td align='center'>" + msg[i].t20 + "</td>" +
                                                "<td align='center'>" + msg[i].t21 + "</td>" +
                                                "<td align='center'>" + msg[i].t22 + "</td>" +
                                                "<td align='center'>" + msg[i].t23 + "</td>" +
                                                "<td align='center'>" + msg[i].t24 + "</td>" +
                                                "<td align='center'>" + msg[i].t25 + "</td>" +
                                                "<td align='center'>" + msg[i].t26 + "</td>" +
                                                "<td align='center'>" + msg[i].t27 + "</td>" +
                                                "<td align='center'>" + msg[i].t28 + "</td>" +
                                                "<td align='center'>" + msg[i].t29 + "</td>" +
                                                "<td align='center'>" + msg[i].t30 + "</td>" +
                                                "<td align='center'>" + msg[i].t31 + "</td>" +
                                                "<td align='center'>" + msg[i].t32 + "</td>" +
                                                "<td align='center'>" + msg[i].t33 + "</td>" +
                                                "<td align='center'>" + msg[i].t34 + "</td>" +
                                                "<td align='center'>" + msg[i].t35 + "</td>" +
                                                "</tr>"
                                        }

                                        tbody.innerHTML = str;
                                    },
                                    error: function() {
                                        alert("失败");
                                    }
                                })

                            } else {
                                if (selectArea == "V10016") {
                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "";
                                    document.getElementById("table-f").style.display = "none";
                                    var tbody = window.document.getElementById("tbody-e");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })

                                } else {

                                    document.getElementById("table-a").style.display = "none";
                                    document.getElementById("table-result").style.display = "none";
                                    document.getElementById("table").style.display = "none";
                                    document.getElementById("table-b").style.display = "none";
                                    document.getElementById("table-c").style.display = "none";
                                    document.getElementById("table-g").style.display = "none";
                                    document.getElementById("table-d").style.display = "none";
                                    document.getElementById("table-e").style.display = "none";
                                    document.getElementById("table-f").style.display = "";
                                    var tbody = window.document.getElementById("tbody-f");

                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        contentType: "application/json;charset=utf-8",
                                        url: "http://localhost:8080/page",
                                        data: "{\"begin\":\"" + begin + "\",\"end\":\"" + end + "\",\"selectArea\":\"" + selectArea + "\",\"selectDate\":\"" + selectDate + "\"}",
                                        success: function(msg) {
                                            var str = "";
                                            for (let i = 0; i < msg.length; i++) {
                                                str += "<tr>" + "<td align='center'>" + msg[i].reportTime + "</td>" +
                                                    "<td align='center'>" + msg[i].t1 + "</td>" +
                                                    "<td align='center'>" + msg[i].t2 + "</td>" +
                                                    "<td align='center'>" + msg[i].t3 + "</td>" +
                                                    "<td align='center'>" + msg[i].t4 + "</td>" +
                                                    "<td align='center'>" + msg[i].t5 + "</td>" +
                                                    "<td align='center'>" + msg[i].t6 + "</td>" +
                                                    "<td align='center'>" + msg[i].t7 + "</td>" +
                                                    "<td align='center'>" + msg[i].t8 + "</td>" +
                                                    "<td align='center'>" + msg[i].t9 + "</td>" +
                                                    "<td align='center'>" + msg[i].t10 + "</td>" +
                                                    "<td align='center'>" + msg[i].t11 + "</td>" +
                                                    "<td align='center'>" + msg[i].t12 + "</td>" +
                                                    "<td align='center'>" + msg[i].t13 + "</td>" +
                                                    "<td align='center'>" + msg[i].t14 + "</td>" +
                                                    "<td align='center'>" + msg[i].t15 + "</td>" +
                                                    "<td align='center'>" + msg[i].t16 + "</td>" +
                                                    "<td align='center'>" + msg[i].t17 + "</td>" +
                                                    "<td align='center'>" + msg[i].t18 + "</td>" +
                                                    "<td align='center'>" + msg[i].t19 + "</td>" +
                                                    "<td align='center'>" + msg[i].t20 + "</td>" +
                                                    "<td align='center'>" + msg[i].t21 + "</td>" +
                                                    "<td align='center'>" + msg[i].t22 + "</td>" +
                                                    "<td align='center'>" + msg[i].t23 + "</td>" +
                                                    "<td align='center'>" + msg[i].t24 + "</td>" +
                                                    "<td align='center'>" + msg[i].t25 + "</td>" +
                                                    "<td align='center'>" + msg[i].t26 + "</td>" +
                                                    "<td align='center'>" + msg[i].t27 + "</td>" +
                                                    "<td align='center'>" + msg[i].t28 + "</td>" +
                                                    "<td align='center'>" + msg[i].t29 + "</td>" +
                                                    "<td align='center'>" + msg[i].t30 + "</td>" +
                                                    "<td align='center'>" + msg[i].t31 + "</td>" +
                                                    "<td align='center'>" + msg[i].t32 + "</td>" +
                                                    "<td align='center'>" + msg[i].t33 + "</td>" +
                                                    "<td align='center'>" + msg[i].t34 + "</td>" +
                                                    "<td align='center'>" + msg[i].t35 + "</td>" +
                                                    "<td align='center'>" + msg[i].t36 + "</td>" +
                                                    "<td align='center'>" + msg[i].t37 + "</td>" +
                                                    "<td align='center'>" + msg[i].t38 + "</td>" +
                                                    "<td align='center'>" + msg[i].t39 + "</td>" +
                                                    "<td align='center'>" + msg[i].t40 + "</td>" +
                                                    "<td align='center'>" + msg[i].t41 + "</td>" +
                                                    "<td align='center'>" + msg[i].t42 + "</td>" +
                                                    "<td align='center'>" + msg[i].t43 + "</td>" +
                                                    "<td align='center'>" + msg[i].t44 + "</td>" +
                                                    "<td align='center'>" + msg[i].t45 + "</td>" +
                                                    "<td align='center'>" + msg[i].t46 + "</td>" +
                                                    "</tr>"
                                            }

                                            tbody.innerHTML = str;
                                        },
                                        error: function() {
                                            alert("失败");
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}