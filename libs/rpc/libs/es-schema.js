/**
 * 派派 ES 接入协议
 *
 * @author 张鹏
 * @date 2017-5-5
 */
const path = require('path');
/**
 * 声明 ES 用到的协议
 *
 * @param {jpacks} jpacks 打包解包对象
 * @param {string} protoPath protobuf 协议文件路径
 */
module.exports = function (jpacks, protoPath) {
    let _ = jpacks;

    _.setDefaultOptions({
        protobuf_bytesAsString: true
    });

    _.def('packLen', {
        len: _.uint16
    });


    //存活包
    _.def('存活包RQ',//5149
        _.protobuf(
            path.join(protoPath, 'SysPacketDef.proto'),
            'SysPackDef.UserLiveRq',
            // _.depend('length', _.virtual(-6))
            null
        ));

    _.def('存活包RS',//5150
        _.protobuf(
            path.join(protoPath, 'SysPacketDef.proto'),
            'SysPackDef.UserLiveRs',
            _.depend('length', _.virtual(-6)),
            null
        ));

    _.def('查箱子RQ',//
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameEndQueryBoxRQ',
            // _.depend('length', _.virtual(-6))
            null
        ));

    _.def('查箱子RS',//
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameEndQueryBoxRS',
            _.depend('length', _.virtual(-6)),
            null
        ));

    //房间列表
    _.def('房间列表RQ',//6210
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameroomOnlineListRQ',
            // _.depend('length', _.virtual(-6))
            null
        ));

    _.def('房间列表RS',//6211
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameroomOnlineListRS',
            _.depend('length', _.virtual(-6))
        )
    );

    //游戏进度通知
    _.def('游戏进度通知',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameStateNotifyID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    //弹幕消耗价格
    _.def('弹幕消耗价格',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameRoomExtraInfoID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    //游戏房间弹幕消息通知包
    _.def('弹幕消息通知',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameTextID',
            // _.depend('length', _.virtual(-6)),
            null
        ));
    //奖励通知包 
    _.def('奖励通知',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameAwardBroadcastListID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 推送游戏比赛榜单排名列表(比赛中，每回合广播推送前5名)
    _.def('榜单排名列表',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameMatchRankTopPushRS',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 查询用户游戏比赛排名
    _.def('查询用户游戏比赛排名RQ',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GetUserGameMatchRankRQ',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 查询用户游戏比赛排名
    _.def('查询用户游戏比赛排名RS',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GetUserGameMatchRankRS',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 查询用户游戏比赛排名
    _.def('查询游戏比赛榜单排名列表RQ',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameMatchRankListRQ',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 查询用户游戏比赛排名
    _.def('查询游戏比赛榜单排名列表RS',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameMatchRankListRS',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    //游戏每轮结束
    _.def('游戏每轮结束',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameRoundEndNotifyID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    // 游戏回合变化房间内广播包
    _.def('回合变化',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.RoundChangeRoomNotifyID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    //游戏结束
    _.def('游戏结束',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameEndNotifyID',
            // _.depend('length', _.virtual(-6)),
            null
        ));

    _.def('游戏结束结算前',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameEndPreNotifyID',
            // _.depend('length', _.virtual(-6)),
            null
        ));


    _.def('H5游戏数据变化',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.PaintShapeID',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('H5游戏加入RQ',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.H5HelpJoinGameRQ',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('H5游戏加入RS',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.H5HelpJoinGameRS',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('H5游戏答题RQ',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.H5HelpGameAnswerRQ',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('H5游戏答题RS',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.H5HelpGameAnswerRS',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('游戏状况查询RQ',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameStateQueryRQ',
            // _.depend('length', _.virtual(-6))
            null
        ));
    _.def('游戏状况查询RS',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.GameStateQueryRS',
            // _.depend('length', _.virtual(-6))
            null
        ));

    _.def('H5游戏回合结束',
        _.protobuf(
            path.join(protoPath, 'Game.proto'),
            'Game.H5RoundEndNotifyID',
            // _.depend('length', _.virtual(-6))
            null
        ));

    /*
     *麦序变化
     */
    _.def('麦序变化',
        _.protobuf(
            path.join(protoPath, 'AudiochatPackDef.proto'),
            'AudioChatPackDef.UpdateMicListId',//
            _.depend('length', _.virtual(-6))
        )
    );

    _.def('ESRS', {
        length: _.uint16,
        reserve: _.uint16,
        packType: _.uint16,
        data: _.depend('packType', function (type) {
            switch (type) {
                case 5150:
                    return '存活包RS';
                case 6218:
                    return '弹幕消耗价格';
                case 6178:
                    return '游戏进度通知';
                case 6211:
                    return '房间列表RS';
                // case 6190:
                case 6214:
                    return 'H5游戏数据变化';
                case 6220:
                    return 'H5游戏加入RS';
                case 6222:
                    return 'H5游戏答题RS';
                case 6209:
                    return '弹幕消息通知';
                case 6217:
                    return '奖励通知';
                case 8717:
                    return '榜单排名列表';
                case 6192:
                    return '游戏每轮结束';
                case 6223:
                    return '回合变化';
                case 6187:
                    return '游戏结束';
                case 8714:
                    return '查询用户游戏比赛排名RS';
                case 6144:
                    return '麦序变化';
                case 8712:
                    return '查询游戏比赛榜单排名列表RS';
                case 6180:
                    return '游戏状况查询RS';
                case 6226:
                    return '游戏结束结算前';
                case 6227:
                    return 'H5游戏回合结束';
                case 6229:
                    return '查箱子RS';
            }
            return _.bytes(10);
        })
    });

    _.def('ESRQ', new _({
        pack: function (value, options, buffer) {
            let bytes;
            switch (value.packType) {
                case 5149:
                    bytes = _.pack('存活包RQ', value.data);
                    break;
                case 6210:
                    bytes = _.pack('房间列表RQ', value.data);
                    break;
                case 6219:
                    bytes = _.pack('H5游戏加入RQ', value.data);
                    break;
                case 6221:
                    bytes = _.pack('H5游戏答题RQ', value.data);
                    break;
                case 8713:
                    bytes = _.pack('查询用户游戏比赛排名RQ', value.data);
                    break;
                case 8711:
                    bytes = _.pack('查询游戏比赛榜单排名列表RQ', value.data);
                    break;
                case 6179:
                    bytes = _.pack('游戏状况查询RQ', value.data);
                    break;
                case 6228:
                    bytes = _.pack('查箱子RQ', value.data);
                    break;
            }
            if (!bytes) {
                return;
            }
            _.pack({
                length: _.uint16,
                reserve: _.uint16,
                packType: _.uint16,
                data: _.bytes(bytes.length)
            }, {
                    length: bytes.length + 6,
                    reserve: value.reserve,
                    packType: value.packType,
                    data: bytes
                }, options, buffer);
        }
    }));
};