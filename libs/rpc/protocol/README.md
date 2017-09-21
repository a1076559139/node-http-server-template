##README  
*  需要安装protobuf 2.5
*  需要新建java、cpp、python三个目录
*  执行./build.sh

###TYPE_DEF
```cpp
#define DEF_REQUEST_CONFIRMED_ID                        (DEF_PACK_TYPE_ANONYMOUS_BASE + 130)
#define DEF_REQUEST_CONFIRMED_RQ                        (DEF_PACK_TYPE_ANONYMOUS_BASE + 131)
#define DEF_REQUEST_CONFIRMED_RS                        (DEF_PACK_TYPE_ANONYMOUS_BASE + 132)
//boss server
#define DEF_REQUEST_BOSS_RQ                             (DEF_PACK_TYPE_ANONYMOUS_BASE + 133)
#define DEF_REQUEST_BOSS_RS                             (DEF_PACK_TYPE_ANONYMOUS_BASE + 134)
#define DEF_USE_SKILL_TO_BOSS_RQ                        (DEF_PACK_TYPE_ANONYMOUS_BASE + 135)
#define DEF_USE_SKILL_TO_BOSS_RS                        (DEF_PACK_TYPE_ANONYMOUS_BASE + 136)
#define DEF_BOSS_INFO_ID                                (DEF_PACK_TYPE_ANONYMOUS_BASE + 137)
#define DEF_BOSS_DEAD_INFO_ID                           (DEF_PACK_TYPE_ANONYMOUS_BASE + 138)
#define DEF_BOSS_DEAD_INFO_RQ                           (DEF_PACK_TYPE_ANONYMOUS_BASE + 139)
#define DEF_BOSS_DEAD_INFO_RS                           (DEF_PACK_TYPE_ANONYMOUS_BASE + 140)
```
### red packet
```cpp
#define DEF_DEFAULT_CLIENT_PACKET_BASE = 0

#define DEF_PACK_TYPE_REDPACKET_BASE        			(DEF_DEFAULT_CLIENT_PACKET_BASE+6700)
#define DEF_REDPACKET_SHAREREDPACKET_RQ             	(DEF_PACK_TYPE_REDPACKET_BASE+0)
#define DEF_REDPACKET_SHAREREDPACKET_RS             	(DEF_PACK_TYPE_REDPACKET_BASE+1)
#define DEF_REDPACKET_GRABREDPACKET_RQ             		(DEF_PACK_TYPE_REDPACKET_BASE+2)
#define DEF_REDPACKET_GRABREDPACKET_RS             		(DEF_PACK_TYPE_REDPACKET_BASE+3)
#define DEF_REDPACKET_GETPACKETBGRABSTATE_RQ			(DEF_PACK_TYPE_REDPACKET_BASE+4)
#define DEF_REDPACKET_GETPACKETBGRABSTATE_RS			(DEF_PACK_TYPE_REDPACKET_BASE+5)
#define DEF_REDPACKET_PICKSENDERREDPACKET_RQ			(DEF_PACK_TYPE_REDPACKET_BASE+6)
#define DEF_REDPACKET_PICKSENDERREDPACKET_RS			(DEF_PACK_TYPE_REDPACKET_BASE+7)
#define DEF_REDPACKET_READEDALLMSG_RQ             		(DEF_PACK_TYPE_REDPACKET_BASE+8)
#define DEF_REDPACKET_READEDALLMSG_RS             		(DEF_PACK_TYPE_REDPACKET_BASE+9)
#define DEF_REDPACKET_GETSHARECONSUME_RQ             	(DEF_PACK_TYPE_REDPACKET_BASE+10)
#define DEF_REDPACKET_GETSHARECONSUME_RS             	(DEF_PACK_TYPE_REDPACKET_BASE+11)
#define DEF_REDPACKET_GETHISTROYAWARD_RQ             	(DEF_PACK_TYPE_REDPACKET_BASE+12)
#define DEF_REDPACKET_GETHISTROYAWARD_RS             	(DEF_PACK_TYPE_REDPACKET_BASE+13)
#define DEF_REDPACKET_GETHISTROYBEGRAB_RQ             	(DEF_PACK_TYPE_REDPACKET_BASE+14)
#define DEF_REDPACKET_GETHISTROYBEGRAB_RS             	(DEF_PACK_TYPE_REDPACKET_BASE+15)
#define DEF_REDPACKET_GETROOMPACKET_RQ             		(DEF_PACK_TYPE_REDPACKET_BASE+16)
#define DEF_REDPACKET_GETROOMPACKET_RS             		(DEF_PACK_TYPE_REDPACKET_BASE+17)
#define DEF_REDPACKET_RPUSERTUTORIALGRABA_RQ            (DEF_PACK_TYPE_REDPACKET_BASE+18)
#define DEF_REDPACKET_RPUSERTUTORIALGRABA_RS            (DEF_PACK_TYPE_REDPACKET_BASE+19)
#define DEF_REDPACKET_USERREDPACKETINFO_ID				(DEF_PACK_TYPE_REDPACKET_BASE+20)
#define DEF_REDPACKET_ROOMSTATE_ID             			(DEF_PACK_TYPE_REDPACKET_BASE+21)
#define DEF_REDPACKET_RPUSERINFO_ID             		(DEF_PACK_TYPE_REDPACKET_BASE+22)
#define DEF_REDPACKET_RPROOMEMPTY_ID					(DEF_PACK_TYPE_REDPACKET_BASE+23)
```
```
#define DEF_PACK_TYPE_ACHIEVEMENT_BASE      				(DEF_DEFAULT_CLIENT_PACKET_BASE+6800)

#define DEF_ACHIEVEMENT_ARCHGETUSERBRIEFINFO_RQ             (DEF_PACK_TYPE_ACHIEVEMENT_BASE+0)
#define DEF_ACHIEVEMENT_ARCHGETUSERBRIEFINFO_RS             (DEF_PACK_TYPE_ACHIEVEMENT_BASE+1)

#define DEF_ACHIEVEMENT_ARCHUPGRADEENSURE_RQ                (DEF_PACK_TYPE_ACHIEVEMENT_BASE+2)
#define DEF_ACHIEVEMENT_ARCHUPGRADEENSURE_RS                (DEF_PACK_TYPE_ACHIEVEMENT_BASE+3)

#define DEF_ACHIEVEMENT_ARCHGETUSERINFO_RQ                  (DEF_PACK_TYPE_ACHIEVEMENT_BASE+4)
#define DEF_ACHIEVEMENT_ARCHGETUSERINFO_RS                  (DEF_PACK_TYPE_ACHIEVEMENT_BASE+5)

#define DEF_ACHIEVEMENT_ARCHUSERINFO_ID                     (DEF_PACK_TYPE_ACHIEVEMENT_BASE+20)
```
```
#define DEF_VALET_VLGETVALETELEM_RQ							(DEF_PACK_TYPE_VALET_BASE +0)// 获取单个跟班信息请求
#define DEF_VALET_VLGETVALETELEM_RS							(DEF_PACK_TYPE_VALET_BASE +1)// 获取单个跟班信息返回

#define DEF_VALET_VLGETVALETLIST_RQ							(DEF_PACK_TYPE_VALET_BASE +2)// 获取用户跟班列表请求
#define DEF_VALET_VLGETVALETLIST_RS							(DEF_PACK_TYPE_VALET_BASE +3)// 获取用户跟班列表返回

#define DEF_VALET_VLTRADE_RQ								(DEF_PACK_TYPE_VALET_BASE +4)// 跟班交易请求
#define DEF_VALET_VLTRADE_RS								(DEF_PACK_TYPE_VALET_BASE +5)// 跟班交易返回

#define DEF_VALET_VLBALANCESTRIKE_RQ						(DEF_PACK_TYPE_VALET_BASE +6)// 跟班结算请求
#define DEF_VALET_VLBALANCESTRIKE_RS						(DEF_PACK_TYPE_VALET_BASE +7)// 跟班结算返回

#define DEF_VALET_VLSEARCH_RQ								(DEF_PACK_TYPE_VALET_BASE +8)// 搜索附近跟班请求
#define DEF_VALET_VLSEARCH_RS								(DEF_PACK_TYPE_VALET_BASE +9)// 搜索附近跟班返回
```