define([], function() {
    var dict = {
        // 酒店订单
        hotelOrderStatus: {
            "0": "待支付",
            "1": "已支付",
            "2": "待退款",
            "4": "已完成",
            "31": "退款失败",
            "32": "入住",
            "91": "取消订单",
            "92": "取消订单",
            "93": "平台取消订单",
            "94": "退款成功"
        },
        // 线路订单
        lineOrderStatus: {
            "0": "待支付",
            "1": "已支付",
            "2": "待退款",
            "4": "已完成",
            "31": "退款失败",
            "32": "已参与",
            "91": "取消订单",
            "92": "取消订单",
            "93": "取消订单",
            "94": "退款成功"
        },
        // 专线订单
        specialLineOrderStatus: {
            "0": "待支付",
            "1": "已支付",
            "2": "待退款",
            "4": "已完成",
            "31": "退款失败",
            "32": "已上车",
            "91": "取消订单",
            "92": "取消订单",
            "93": "取消订单",
            "94": "退款成功"
        },
        // 大巴订单
        busStatus: {
            "0": "待支付",
            "1": "已支付",
            "2": "待退款",
            "4": "已完成",
            "31": "退款失败",
            "32": "已接单",
            "91": "取消订单",
            "92": "取消订单",
            "93": "取消订单",
            "94": "退款成功"
        },
        // 拼车订单
        carpoolStatus: {
            "0": "待支付定金",
            "1": "已支付定金",
            "2": "待支付尾款",
            "3": "已支付尾款",
            "4": "取消订单",
            "91": "取消订单",
            "92": "取消订单",
            "93": "取消订单",
            "94": "取消订单",
            "95": "黑名单",
            "96": "已完成",
            "97": "待支付定金"
        },
        pcStatus: {
            "0": "未发布",
            "1": "已发布",
            "2": "已满员",
            "3": "已接单待发车",
            "91": "平台取消",
            "92": "已发车"
        },
        // 商品订单
        commodityStatus: {
            "0": "待支付",
            "1": "已支付",
            "2": "待退款",
            "4": "已完成",
            "31": "退款失败",
            "32": "发货",
            "91": "取消订单",
            "92": "取消订单",
            "93": "取消订单",
            "94": "退款成功"
        },
        // 游记状态
        travelNoteStatus: {
            "0": "待审核",
            "1": "审核通过",
            "2": "审核不通过"
        },
        // 评论状态
        commentStatus: {
            "0": "用户发布未审核",
            "1": "通过",
            "2": "不通过"
        },
        // 账户流水
        accountFlowStatus: {
            "01": "注册送积分",
            "02": "每日签到送积分",
            "11": "充值",
            "-11": "取现",
            "19": "蓝补",
            "-19": "红冲",
            "-30": "购物",
            "30": "购物退款",
            "-32": "线路购买",
            "32": "线路退款",
            "-33": "酒店订房",
            "33": "酒店退款",
            "-34": "专线购买",
            "34": "专线退款",
            "-35": "大巴预定",
            "35": "大巴退款",
            "-36": "拼车定金支付",
            "-37": "拼车尾款支付",
            "38": "拼车退款",
            "40": "线路消费送积分",
            "41": "酒店消费送积分",
            "42": "专线消费送积分",
            "43": "大巴消费送积分",
            "44": "拼车消费送积分",
            "45": "发布游记送积分"
        }
    };

    return {
        get: function(code) {
            return dict[code];
        }
    }
});
