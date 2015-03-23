// ---------- һЩ�����㷨
/**
 ð��������򵥣�Ҳ������ò�Ƴ���С��7����

 �������� ��ð�ݿ죬�ȿ��������ϣ������������С����������

 ������������һ���ǳ��������ʽ��V8��sort������ʹ�ÿ�������Ͳ�������Ľ��

 ϣ�������ڷ�chrome�����鳤��С��1000��ϣ������ȿ��ٸ���

 ϵͳ��������forfox��ϵͳ����������ǳ���
*/
var JsSort = {
// js ����sort��������  
systemSort: function(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
},
// ð������  
bubbleSort: function(array) {
    var i = 0,
    len = array.length,
    j, d;
    for (; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (array[i] < array[j]) {
                d = array[j];
                array[j] = array[i];
                array[i] = d;
            }
        }
    }
    return array;
},
// ��������  
quickSort: function(array) {
    //var array = [8,4,6,2,7,9,3,5,74,5];  
    /*var array =
    [0, 1, 2, 44, 4, 324, 5, 65, 6, 6, 34, 4, 5, 6, 2, 43, 5, 6, 62, 43, 5, 1, 4, 51, 56, 76, 7, 7, 2, 1, 45, 4, 6, 7];*/
    var i = 0;
    var j = array.length - 1;
    var Sort = function(i, j) {

        // ��������  
        if (i == j) {
            return
        };

        var key = array[i];
        var tempi = i; // ��¼��ʼλ��  
        var tempj = j; // ��¼����λ��  
        while (j > i) {
            // j <<-------------- ��ǰ����  
            if (array[j] >= key) {
                j--;
            } else {
                array[i] = array[j]
                //i++ ------------>>������  
                while (j > ++i) {
                    if (array[i] > key) {
                        array[j] = array[i];
                        break;
                    }
                }
            }
        }

        // �����һ��ȡ���� key ����С����  
        if (tempi == i) {
            Sort(++i, tempj);
            return;
        }

        // ���һ����λ���� key  
        array[i] = key;

        // �ݹ�  
        Sort(tempi, i);
        Sort(j, tempj);
    }

    Sort(i, j);

    return array;
},

// ��������  
insertSort: function(array) {

    // http://baike.baidu.com/image/d57e99942da24e5dd21b7080  
    // http://baike.baidu.com/view/396887.htm  
    /*var array = 
    [0, 1, 2, 44, 4, 324, 5, 65, 6, 6, 34, 4, 5, 6, 2, 43, 5, 6, 62, 43, 5, 1, 4, 51, 56, 76, 7, 7, 2, 1, 45, 4, 6, 7];*/

    var i = 1,j, temp, key, len = array.length;

    for (; i < len; i++) {

        temp = j = i;
        key = array[j];

        while (--j > -1) {
            if (array[j] > key) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }

        array[j + 1] = key;
    }

    return array;
},

// ϣ������  
//Jun.array.shellSort(Jun.array.df(10000));  
shellSort: function(array) {

    // http://zh.wikipedia.org/zh/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F  
    // var array = [13,14,94,33,82,25,59,94,65,23,45,27,73,25,39,10];  
    var tempArr = [1750, 701, 301, 132, 57, 23, 10, 4, 1];
    // reverse() ��ά���Ͽ���������ŵĲ��� ��С����  
    /*var tempArr = [1031612713, 217378076, 45806244,   
    9651787,
    2034035,
    428481,
    90358,
    19001,
    4025,
    836,
    182,
    34,
    9,
    1]*/
    //��Դ�����Ĳ���ѡ��  
    var i = 0;
    var tempArrtempArrLength = tempArr.length;
    var len = array.length;
    var len2 = parseInt(len / 2);

    for (; i < tempArrLength; i++) {
        if (tempArr[i] > len2) {
            continue;
        }

        tempSort(tempArr[i]);
    }

    // ����һ������  
    function tempSort(temp) {

        //console.log(temp) ʹ�õĲ���ͳ��  
        var i = 0,
        j = 0,
        f, tem, key;
        var tempLen = len % temp > 0 ? parseInt(len / temp) + 1 : len / temp;

        for (; i < temp; i++) { // ����ѭ����  
            for (j = 1;
            /*j < tempLen && */
            temp * j + i < len; j++) {
                //����ѭ��ÿ�е�ÿ��  
                tem = f = temp * j + i;
                key = array[f];

                while ((tem -= temp) >= 0) {
                    // �������ϲ���  
                    if (array[tem] > key) {
                        array[tem + temp] = array[tem];
                    } else {
                        break;
                    }
                }

                array[tem + temp] = key;

            }
        }

    }

    return array;
}
}