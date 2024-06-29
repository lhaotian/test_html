const crypto = require('crypto');

function get_code_n08(CODE, M_CODE, PARENT = "通达科技") {
    switch (CODE) {
        case "r_c0de1":
            let R_CODE1 = crypto.createHash('md5').update(M_CODE).digest('hex');
            R_CODE1 = crypto.createHash('md5').update(R_CODE1).digest('hex');

            let R_CODE2 = "";
            for (let i = 0; i < R_CODE1.length; ++i) {
                R_CODE2 += (R_CODE1.charCodeAt(i) + 3).toString();
            }

            R_CODE2 = ((R_CODE2.substring(0, 6) + R_CODE2.substring(R_CODE2.length - 6)) * 3).toString().split('').reverse().join('')
            R_CODE2 = (R_CODE2.toString().substring(R_CODE2.toString().length - 6) + R_CODE2.toString().substring(0, 6));
            R_CODE2 = R_CODE2.replace(/4/g, "1");

            return R_CODE2;

        case "r_c0de2":
            let R_CODE12 = crypto.createHash('md5').update(M_CODE).digest('hex');
            R_CODE12 = crypto.createHash('md5').update(R_CODE12).digest('hex');
            let R_CODE22 = "";
            for (let i = 0; i < R_CODE12.length; ++i) {
                R_CODE22 += R_CODE12.charCodeAt(i).toString();
            }
            R_CODE22 = (R_CODE22.substring(0, 6) + R_CODE22.substring(R_CODE22.length - 6)).split('').reverse().join('');
            R_CODE22 = R_CODE22.substring(R_CODE22.length - 7) + R_CODE22.substring(0, 5);
            R_CODE22 = R_CODE22.replace(/4/g, "2");
            return R_CODE22;


    }
}
let getCode = (macCode) => {
    let codeList = {};
    codeList["正式版"] = get_code_n08("r_c0de1", macCode);
    codeList['试用版'] = get_code_n08("r_c0de2", macCode);
    console.log(codeList);
};
// 示例用法
let macCode = "98a58a7cd80c";
getCode(macCode);