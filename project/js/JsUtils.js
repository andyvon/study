var JsUtils = {
    /**排除字符数组中重复的成员*/
    uniqueItem: function(arr) {
        var res = [],
        hash = {};
        for (var i = 0,
        elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                res.push(elem);
                hash[elem] = true;
            }
        }
        return res;
    },
    /**删除左右两端的空格*/
    trim: function(str) {　　
        return str.replace(/(^\s*)|(\s*$)/g, "");　　
    },
    /**删除左边的空格*/
    ltrim: function(str) {　　
        return str.replace(/(^\s*)/g, "");　　
    },
    /**删除右边的空格*/
    rtrim: function (str) {　　
        return str.replace(/(\s*$)/g, "");　　
    },
	replaceAll : function (str,srcChar,replaceText) {
		var reg = RegExp(srcChar,'g');
		return str.replace(reg,replaceText);
	}
}