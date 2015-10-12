var _und = require('underscore');

var getCategories = require('./get-categories.json');
var getCategory = require('./get-category.json');
var getArticles = require('./get-articles.json');
var getArticle = require('./get-article.json');

var apiUrl = '/api';

module.exports = function (app, options) {

    //categories
    app.get(apiUrl + "/categories", function (req, res) {
        return res.json(getCategories);
    });
    app.get(apiUrl + "/categories/:id", function (req, res) {
        return res.json(getCategory);
    });
    app.post(apiUrl + "/categories", function (req, res) {
        res.send(200);
    });
    app.put(apiUrl + "/categories/:id", function (req, res) {
        res.send(200);
    });
    app.delete(apiUrl + "/categories/:id", function (req, res) {
        res.send(204);
    });

    //articles
    app.get(apiUrl + "/articles", function (req, res) {
        var begin = ((req.query.pageIndex - 1) * req.query.pageSize);
        var end = begin + parseInt(req.query.pageSize);
        //console.log("begin:" + begin + "end:" + end);
        //console.log(getArticles.data.length);

        resArticles = {
            "error": "",
            "data": [],
            "pagination": {
                "total": getArticles.data.length
            }
        };

        resArticles.data = getArticles.data.slice(begin, end);
        return res.json(resArticles);
    });

    app.get(apiUrl + "/articles/:id", function (req, res) {
        return res.json(getArticle);
    });
    app.post(apiUrl + "/articles", function (req, res) {
        res.send(200);
    });
    app.put(apiUrl + "/articles/:id", function (req, res) {
        res.send(200);
    });
    app.delete(apiUrl + "/articles/:id", function (req, res) {
        res.send(204);
    });

    //users
    app.post(apiUrl + "/users/authenticate", function(req, res){
        var data = {
            success : true
        };
        res.send(data);
    });

    //upload
    app.get(apiUrl + '/uploads', function(req,res){
        var action = req.query.action;
        switch(action){
            case "config":
            //res.setHeader('Content-Type', 'application/json');
            res.json({
                "imageActionName": "uploadimage",
                "imageFieldName": "upfile",
                "imageMaxSize": 2048000,
                "imageAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
                "imageCompressEnable": true,
                "imageCompressBorder": 1600,
                "imageInsertAlign": "none",
                "imageUrlPrefix": "",
                "imagePathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",

                "fileActionName": "uploadfile",
                "fileFieldName": "upfile",
                "filePathFormat": "/ueditor/php/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}",
                "fileUrlPrefix": "",
                "fileMaxSize": 51200000,
                "fileAllowFiles": [
                    ".png", ".jpg", ".jpeg", ".gif", ".bmp",
                    ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
                    ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
                    ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
                    ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
                ],


                "imageManagerActionName": "listimage",
                "imageManagerListPath": "/ueditor/php/upload/image/",
                "imageManagerListSize": 20,
                "imageManagerUrlPrefix": "",
                "imageManagerInsertAlign": "none",
                "imageManagerAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"],


                "fileManagerActionName": "listfile",
                "fileManagerListPath": "/ueditor/php/upload/file/",
                "fileManagerUrlPrefix": "",
                "fileManagerListSize": 20,
                "fileManagerAllowFiles": [
                    ".png", ".jpg", ".jpeg", ".gif", ".bmp",
                    ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
                    ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
                    ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
                    ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
                ]

            });
            break;
            case "uploadimage": console.log("uploadimage"); break;
            case "uploadscrawl": console.log("uploadscrawl"); break;
            case "uploadvideo": console.log("uploadvideo"); break;
            case "uploadfile": console.log("uploadfile"); break;
            case "listimage": console.log("listimage"); break;
            case "listfile": console.log("listfile"); break;
            case "catchimage": console.log("catchimage"); break;
            default: break;
        }
    });

    //app.post(apiUrl + '/uploads', function(req,res){
    //    var action = req.body.action;
    //    console.log(action);
    //    switch(action){
    //        case "config":
    //            break;
    //        case "uploadimage": console.log("uploadimage"); break;
    //        case "uploadscrawl": console.log("uploadscrawl"); break;
    //        case "uploadvideo": console.log("uploadvideo"); break;
    //        case "uploadfile": console.log("uploadfile"); break;
    //        case "listimage": console.log("listimage"); break;
    //        case "listfile": console.log("listfile"); break;
    //        case "catchimage": console.log("catchimage"); break;
    //        default: break;
    //    }
    //});
};
