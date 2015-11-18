var _und = require('underscore');
var fs = require('fs');
var getCategories = require('./get-categories.json');
var getCategory = require('./get-category.json');
var getArticles = require('./get-articles.json');
var getArticle = require('./get-article.json');
var getUEConfig = require('./ueditor.config.json');

var apiUrl = '/api';

module.exports = function (app, options) {

    //categories
    app.get(apiUrl + "/categories", function (req, res) {
        var datas = getCategories.data;
        var rows = datas;

        //获取父分类列表
        if(req.query.parentId == 0){
            datas = _und.filter(datas, function(t){
                return t.ParentId == 0;
            });
            return res.json(datas);
        }

        //分页筛选
        if(req.query.filters){
            var filter = JSON.parse(req.query.filters);
            if(filter.ParentId){
                rows = _und.filter(datas, function(t){
                    return t.ParentId == filter.ParentId || t.Id == filter.ParentId;
                });
                datas = rows;
            }
        }
        if(req.query.page){
            var begin = ((req.query.page - 1) * req.query.count);
            var end = begin + parseInt(req.query.count);
            rows = rows.slice(begin, end);
        }

        return res.json(
            {
                "rows": rows,
                "pagination": {
                    "count": parseInt(req.query.count),
                    "page": parseInt(req.query.page),
                    "pages": Math.round(datas.length / req.query.count),
                    "size": datas.length
                }
            });
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
        var datas = getArticles.data;
        var rows = datas;

        if(req.query.categoryId){
            rows = _und.filter(datas, function(t){
                return t.CategoryId == req.query.categoryId;
            });
            datas = rows;
        }

        if(req.query.page){
            var begin = ((req.query.page - 1) * req.query.count);
            var end = begin + parseInt(req.query.count);
            rows = rows.slice(begin, end);
        }

        return res.json({
            "rows": rows,
            "pagination": {
                "count": parseInt(req.query.count),
                "page": parseInt(req.query.page),
                "pages": Math.round(datas.length / req.query.count),
                "size": datas.length
            }
        });
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
    app.post(apiUrl + "/users/authenticate", function (req, res) {
        var data = {
            success: true
        };
        res.send(data);
    });

    //file-upload
    app.post(apiUrl + '/uploads', function (req, res) {
        data = {
            "success": true,
            "imgUrl": "/assets/upload/images/16433e01-c.jpg"
        };
        res.json(data);
    });

    //ue-upload
    app.get(apiUrl + '/ue/uploads', function (req, res) {
        var action = req.query.action;
        switch (action) {
            case "config":
                res.json(getUEConfig);
                break;
            case "uploadimage":
                console.log("uploadimage");
                break;
            case "uploadscrawl":
                console.log("uploadscrawl");
                break;
            case "uploadvideo":
                console.log("uploadvideo");
                break;
            case "uploadfile":
                console.log("uploadfile");
                break;
            case "listimage":
                uploadsPath = "/assets/upload/ue/images/";
                fs.readdir(uploadsPath, function (err, files) {
                    var total = 0, list = [];
                    files.sort().splice(req.query.start, req.query.size).forEach(function (a, b) {
                        /^.+.\..+$/.test(a) &&
                        list.push({
                            url: uploadsPath + a,
                            mtime: new Date(fs.statSync(uploadsPath + a).mtime).getTime()
                        });
                    });
                    total = list.length;
                    res.json({
                        state: total === 0 ? 'no match file' : 'SUCCESS',
                        list: list,
                        total: total,
                        start: req.query.start
                    });
                });
                break;
            case "listfile":
                console.log("listfile");
                break;
            case "catchimage":
                console.log("catchimage");
                break;
            default:
                break;
        }
    });
};
