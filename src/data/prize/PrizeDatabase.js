/**
 * A simple in-memory database for storing prize information.
 * Each prize is identified by its name.
 */
const PrizeDatabase = {
  星界碎塊: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80127.png',
    quality: '一般',
  },
  高級職業經驗提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80130.png',
    quality: '稀有',
  },
  高級角色經驗提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80104.png',
    quality: '稀有',
  },
  高級掉寶提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80102.png',
    quality: '稀有',
  },
  星靈羈絆寶石: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80109.png',
    quality: '一般',
  },
  '特選披風附魔‧元素α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選披風附魔‧奧術α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選披風附魔‧遠程α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選披風附魔‧近戰α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選戒指附魔‧抗爆α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選戒指附魔‧頭目降傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選戒指附魔‧降傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  '特選戒指附魔‧抗性α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    quality: '史詩',
  },
  星河徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '稀有',
  },
  銀月徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '稀有',
  },
  赤日徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '稀有',
  },
  元素之風戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '神話',
  },
  奧術之秘戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '神話',
  },
  遠程之梟戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '神話',
  },
  近戰之怒戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    quality: '神話',
  },
  '掉寶+1護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80098.png',
    quality: '一般',
  },
  '掉寶+2護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80099.png',
    quality: '特殊',
  },
  '掉寶+3護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80100.png',
    quality: '稀有',
  },
  '掉寶+4護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80161.png',
    quality: '特殊',
  },
  '掉寶+5護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80162.png',
    quality: '稀有',
  },
  '炎力光劍(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12301.png',
    quality: '神話',
  },
  '雷力光劍(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12901.png',
    quality: '神話',
  },
  '炎力光劍(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12301.png',
    quality: '永恆',
  },
  '雷力光劍(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12901.png',
    quality: '永恆',
  },
  '手染服飾‧夏日狂想(男)(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20291.png',
    quality: '神話',
  },
  '手染服飾‧浪漫海風(女)(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20293.png',
    quality: '神話',
  },
  '手染服飾‧夏日狂想(男)(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20291.png',
    quality: '永恆',
  },
  '手染服飾‧浪漫海風(女)(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20293.png',
    quality: '永恆',
  },
  莉貝菈的星靈契約書: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80567.png',
    quality: '稀有',
  },
  殘響風笛: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I00766.png',
    quality: '神話',
  },
  '混能精魄‧龍偶使': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81195.png',
    quality: '史詩',
  },
  星級裝備強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80006.png',
    quality: '史詩',
  },
  武功秘笈自選寶盒: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80055.png',
    quality: '一般',
  },
  '蒼誓金羽‧娜塔莎': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81080.png',
    quality: '神話',
  },
  高級戰徽滿貫包: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80049.png',
    quality: '神話',
  },
};

export default PrizeDatabase;
