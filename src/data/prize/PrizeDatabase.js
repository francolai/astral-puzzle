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
  '巧酥‧甜點萌犬(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81200.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/57465-%E5%B7%A7%E9%85%A5%E7%94%9C%E9%BB%9E%E8%90%8C%E7%8A%AC',
    quality: '神話',
  },
  '蜜莓‧甜點萌犬(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81201.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/57466-%E8%9C%9C%E8%8E%93%E7%94%9C%E9%BB%9E%E8%90%8C%E7%8A%AC',
    quality: '神話',
  },
  '巧酥‧甜點萌犬(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81200.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/57467-%E5%B7%A7%E9%85%A5%E7%94%9C%E9%BB%9E%E8%90%8C%E7%8A%AC',
    quality: '永恆',
  },
  '蜜莓‧甜點萌犬(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81201.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/57466-%E8%9C%9C%E8%8E%93%E7%94%9C%E9%BB%9E%E8%90%8C%E7%8A%AC',
    quality: '永恆',
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
  紅葉的星靈契約書: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80561.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40784-%E7%B4%85%E8%91%89%E7%9A%84%E6%98%9F%E9%9D%88%E5%A5%91%E7%B4%84%E6%9B%B8',
    quality: '稀有',
  },
  花音的星靈契約書: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80561.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40874-%E8%8A%B1%E9%9F%B3%E7%9A%84%E6%98%9F%E9%9D%88%E5%A5%91%E7%B4%84%E6%9B%B8',
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
  '符能精魄‧金牛': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81036.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41729-%E7%AC%A6%E8%83%BD%E7%B2%BE%E9%AD%84%E9%87%91%E7%89%9B',
    quality: '神話',
  },
  星級裝備強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80006.png',
    quality: '史詩',
  },
  武功秘笈自選寶盒: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80055.png',
    quality: '一般',
  },
  '誓約星羽‧多多': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80693.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41920-%E8%AA%93%E7%B4%84%E6%98%9F%E7%BE%BD%E5%A4%9A%E5%A4%9A',
    quality: '史詩',
  },
  '誓約星羽‧璃兒': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80691.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/53497-%E8%AA%93%E7%B4%84%E6%98%9F%E7%BE%BD%E7%92%83%E5%85%92',
    quality: '史詩',
  },
  '誓約星羽‧小莉塔': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80747.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41921-%E8%AA%93%E7%B4%84%E6%98%9F%E7%BE%BD%E5%B0%8F%E8%8E%89%E5%A1%94',
    quality: '史詩',
  },
  '蒼誓金羽‧娜塔莎': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81080.png',
    quality: '神話',
  },
  高級戰徽滿貫包: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80049.png',
    quality: '神話',
  },
  '幻姬‧蒼誓召喚法陣': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80870.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/42078-%E5%B9%BB%E5%A7%AC%E8%92%BC%E8%AA%93%E5%8F%AC%E5%96%9A%E6%B3%95%E9%99%A3',
    quality: '神話',
  },
};

export default PrizeDatabase;
