/**
 * A simple in-memory database for storing prize information.
 * Each prize is identified by its name.
 */
const PrizeDatabase = {
  星界碎塊: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80127.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/45332-%E6%98%9F%E7%9F%B3%E7%A2%8E%E5%A1%8A',
    quality: '一般',
  },
  高級職業經驗提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80130.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40141-%E9%AB%98%E7%B4%9A%E8%81%B7%E6%A5%AD%E7%B6%93%E9%A9%97%E6%8F%90%E5%8D%87%E7%A5%9D%E7%A6%8F',
    quality: '稀有',
  },
  高級角色經驗提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80104.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40084-%E9%AB%98%E7%B4%9A%E8%A7%92%E8%89%B2%E7%B6%93%E9%A9%97%E6%8F%90%E5%8D%87%E7%A5%9D%E7%A6%8F',
    quality: '稀有',
  },
  高級掉寶提升祝福: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80102.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40080-%E9%AB%98%E7%B4%9A%E6%8E%89%E5%AF%B6%E6%8F%90%E5%8D%87%E7%A5%9D%E7%A6%8F',
    quality: '稀有',
  },
  星靈羈絆寶石: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80109.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40056-%E6%98%9F%E9%9D%88%E7%BE%88%E7%B5%86%E5%AF%B6%E7%9F%B3',
    quality: '一般',
  },
  '特選披風附魔‧元素α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64899-%E7%89%B9%E9%81%B8%E6%8A%AB%E9%A2%A8%E9%99%84%E9%AD%94%E5%85%83%E7%B4%A0%CE%B1',
    quality: '史詩',
  },
  '特選披風附魔‧奧術α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64900-%E7%89%B9%E9%81%B8%E6%8A%AB%E9%A2%A8%E9%99%84%E9%AD%94%E5%A5%A7%E8%A1%93%CE%B1',
    quality: '史詩',
  },
  '特選披風附魔‧遠程α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64898-%E7%89%B9%E9%81%B8%E6%8A%AB%E9%A2%A8%E9%99%84%E9%AD%94%E9%81%A0%E7%A8%8B%CE%B1',
    quality: '史詩',
  },
  '特選披風附魔‧近戰α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64897-%E7%89%B9%E9%81%B8%E6%8A%AB%E9%A2%A8%E9%99%84%E9%AD%94%E8%BF%91%E6%88%B0%CE%B1',
    quality: '史詩',
  },
  '特選戒指附魔‧抗爆α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64916-%E7%89%B9%E9%81%B8%E6%88%92%E6%8C%87%E9%99%84%E9%AD%94%E6%8A%97%E7%88%86%CE%B1',
    quality: '史詩',
  },
  '特選戒指附魔‧頭目降傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64917-%E7%89%B9%E9%81%B8%E6%88%92%E6%8C%87%E9%99%84%E9%AD%94%E9%A0%AD%E7%9B%AE%E9%99%8D%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  '特選戒指附魔‧降傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64915-%E7%89%B9%E9%81%B8%E6%88%92%E6%8C%87%E9%99%84%E9%AD%94%E9%99%8D%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  '特選戒指附魔‧抗性α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64918-%E7%89%B9%E9%81%B8%E6%88%92%E6%8C%87%E9%99%84%E9%AD%94%E6%8A%97%E6%80%A7%CE%B1',
    quality: '史詩',
  },
  '特選項鍊附魔‧造傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64910-%E7%89%B9%E9%81%B8%E9%A0%85%E9%8D%8A%E9%99%84%E9%AD%94%E9%80%A0%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  '特選項鍊附魔‧頭目造傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64911-%E7%89%B9%E9%81%B8%E9%A0%85%E9%8D%8A%E9%99%84%E9%AD%94%E9%A0%AD%E7%9B%AE%E9%80%A0%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  '特選項鍊附魔‧爆傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64912-%E7%89%B9%E9%81%B8%E9%A0%85%E9%8D%8A%E9%99%84%E9%AD%94%E7%88%86%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  '特選項鍊附魔‧頭目爆傷α': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80206.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64913-%E7%89%B9%E9%81%B8%E9%A0%85%E9%8D%8A%E9%99%84%E9%AD%94%E9%A0%AD%E7%9B%AE%E7%88%86%E5%82%B7%CE%B1',
    quality: '史詩',
  },
  星河徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/45391-%E6%98%9F%E6%B2%B3%E5%BE%BD%E5%8D%B0',
    quality: '稀有',
  },
  銀月徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/45335-%E9%8A%80%E6%9C%88%E5%BE%BD%E5%8D%B0',
    quality: '稀有',
  },
  赤日徽印: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/45392-%E8%B5%A4%E6%97%A5%E5%BE%BD%E5%8D%B0',
    quality: '稀有',
  },
  元素之風戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/47205-%E5%85%83%E7%B4%A0%E4%B9%8B%E9%A2%A8%E6%88%B0%E5%BE%BD',
    quality: '神話',
  },
  奧術之秘戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/47206-%E5%A5%A7%E8%A1%93%E4%B9%8B%E7%A7%98%E6%88%B0%E5%BE%BD',
    quality: '神話',
  },
  遠程之梟戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/47204-%E9%81%A0%E7%A8%8B%E4%B9%8B%E6%A2%9F%E6%88%B0%E5%BE%BD',
    quality: '神話',
  },
  近戰之怒戰徽: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80091.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/47203-%E8%BF%91%E6%88%B0%E4%B9%8B%E6%80%92%E6%88%B0%E5%BE%BD',
    quality: '神話',
  },
  '掉寶+1護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80098.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40068-%E6%8E%89%E5%AF%B61%E8%AD%B7%E7%AC%A6',
    quality: '一般',
  },
  '掉寶+2護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80099.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40070-%E6%8E%89%E5%AF%B62%E8%AD%B7%E7%AC%A6',
    quality: '特殊',
  },
  '掉寶+3護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80100.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40072-%E6%8E%89%E5%AF%B63%E8%AD%B7%E7%AC%A6',
    quality: '稀有',
  },
  '掉寶+4護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80161.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40074-%E6%8E%89%E5%AF%B64%E8%AD%B7%E7%AC%A6',
    quality: '特殊',
  },
  '掉寶+5護符': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80162.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40076-%E6%8E%89%E5%AF%B65%E8%AD%B7%E7%AC%A6',
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
    dataURL:
      'https://www.astraltaledb.com/tw/item/53842-%E6%AD%A6%E5%99%A8%E7%82%8E%E5%8A%9B%E5%85%89%E5%8A%8D',
    quality: '神話',
  },
  '雷力光劍(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12901.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/53841-%E6%AD%A6%E5%99%A8%E9%9B%B7%E5%8A%9B%E5%85%89%E5%8A%8D',
    quality: '神話',
  },
  '炎力光劍(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12301.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55432-%E6%AD%A6%E5%99%A8%E7%82%8E%E5%8A%9B%E5%85%89%E5%8A%8D',
    quality: '永恆',
  },
  '雷力光劍(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W12901.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55431-%E6%AD%A6%E5%99%A8%E9%9B%B7%E5%8A%9B%E5%85%89%E5%8A%8D',
    quality: '永恆',
  },
  '武器‧銀月之舞雙刀(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W73001.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/53909-%E6%AD%A6%E5%99%A8%E9%8A%80%E6%9C%88%E4%B9%8B%E8%88%9E%E9%9B%99%E5%88%80',
    quality: '神話',
  },
  '武器‧風魔之噬雙刀(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W73101.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/53910-%E6%AD%A6%E5%99%A8%E9%A2%A8%E9%AD%94%E4%B9%8B%E5%99%AC%E9%9B%99%E5%88%80',
    quality: '神話',
  },
  '武器‧銀月之舞雙刀(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W73001.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55499-%E6%AD%A6%E5%99%A8%E9%8A%80%E6%9C%88%E4%B9%8B%E8%88%9E%E9%9B%99%E5%88%80',
    quality: '永恆',
  },
  '武器‧風魔之噬雙刀(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/W73101.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55500-%E6%AD%A6%E5%99%A8%E9%A2%A8%E9%AD%94%E4%B9%8B%E5%99%AC%E9%9B%99%E5%88%80',
    quality: '永恆',
  },

  '頭飾‧貪吃鬼松鼠(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K10335.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54015-%E9%A0%AD%E9%A3%BE%E8%B2%AA%E5%90%83%E9%AC%BC%E6%9D%BE%E9%BC%A0',
    quality: '神話',
  },
  '頭飾‧小畫家松鼠(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K10336.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54016-%E9%A0%AD%E9%A3%BE%E5%B0%8F%E7%95%AB%E5%AE%B6%E6%9D%BE%E9%BC%A0',
    quality: '神話',
  },
  '頭飾‧貪吃鬼松鼠(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K10335.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55597-%E9%A0%AD%E9%A3%BE%E8%B2%AA%E5%90%83%E9%AC%BC%E6%9D%BE%E9%BC%A0',
    quality: '永恆',
  },
  '頭飾‧小畫家松鼠(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K10336.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55598-%E9%A0%AD%E9%A3%BE%E5%B0%8F%E7%95%AB%E5%AE%B6%E6%9D%BE%E9%BC%A0',
    quality: '永恆',
  },
  '背飾‧墮落六翼天使(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K60029.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54025-%E8%83%8C%E9%A3%BE%E5%A2%AE%E8%90%BD%E5%85%AD%E7%BF%BC%E5%A4%A9%E4%BD%BF',
    quality: '神話',
  },
  '背飾‧輝煌六翼天使(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K60200.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54246-%E8%83%8C%E9%A3%BE%E8%BC%9D%E7%85%8C%E5%85%AD%E7%BF%BC%E5%A4%A9%E4%BD%BF',
    quality: '神話',
  },
  '背飾‧墮落六翼天使(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K60029.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55607-%E8%83%8C%E9%A3%BE%E5%A2%AE%E8%90%BD%E5%85%AD%E7%BF%BC%E5%A4%A9%E4%BD%BF',
    quality: '永恆',
  },
  '背飾‧輝煌六翼天使(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K60200.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55819-%E8%83%8C%E9%A3%BE%E8%BC%9D%E7%85%8C%E5%85%AD%E7%BF%BC%E5%A4%A9%E4%BD%BF',
    quality: '永恆',
  },
  '手染服飾‧夏日狂想(男)(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20291.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54264-%E6%89%8B%E6%9F%93%E6%9C%8D%E9%A3%BE%E5%A4%8F%E6%97%A5%E7%8B%82%E6%83%B3%E7%94%B7',
    quality: '神話',
  },
  '手染服飾‧浪漫海風(女)(金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20293.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/54265-%E6%89%8B%E6%9F%93%E6%9C%8D%E9%A3%BE%E6%B5%AA%E6%BC%AB%E6%B5%B7%E9%A2%A8%E5%A5%B3',
    quality: '神話',
  },
  '手染服飾‧夏日狂想(男)(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20291.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55837-%E6%89%8B%E6%9F%93%E6%9C%8D%E9%A3%BE%E5%A4%8F%E6%97%A5%E7%8B%82%E6%83%B3%E7%94%B7',
    quality: '永恆',
  },
  '手染服飾‧浪漫海風(女)(粉金)': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/K20293.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/55838-%E6%89%8B%E6%9F%93%E6%9C%8D%E9%A3%BE%E6%B5%AA%E6%BC%AB%E6%B5%B7%E9%A2%A8%E5%A5%B3',
    quality: '永恆',
  },
  玫瑰金自選禮盒V: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I00821.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64274-%E7%8E%AB%E7%91%B0%E9%87%91%E8%87%AA%E9%81%B8%E7%A6%AE%E7%9B%92v',
    quality: '神話',
  },
  莉貝菈的星靈契約書: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80567.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40959-%E8%8E%89%E8%B2%9D%E8%8F%88%E7%9A%84%E6%98%9F%E9%9D%88%E5%A5%91%E7%B4%84%E6%9B%B8',
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
  莓莓的星靈契約書: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80561.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40739-%E8%8E%93%E8%8E%93%E7%9A%84%E6%98%9F%E9%9D%88%E5%A5%91%E7%B4%84%E6%9B%B8',
    quality: '稀有',
  },
  殘響風笛: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I00766.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/42088-%E6%AE%98%E9%9F%BF%E9%A2%A8%E7%AC%9B',
    quality: '神話',
  },
  '混能精魄‧龍偶使': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81195.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41917-%E6%B7%B7%E8%83%BD%E7%B2%BE%E9%AD%84%E9%BE%8D%E5%81%B6%E4%BD%BF',
    quality: '史詩',
  },
  '混能精魄‧獵人': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80771.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40993-%E6%B7%B7%E8%83%BD%E7%B2%BE%E9%AD%84%E7%8D%B5%E4%BA%BA',
    quality: '史詩',
  },
  '混能精魄‧鬥士': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80773.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40995-%E6%B7%B7%E8%83%BD%E7%B2%BE%E9%AD%84%E9%AC%A5%E5%A3%AB',
    quality: '史詩',
  },
  '混能精魄‧刺客': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80772.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40994-%E6%B7%B7%E8%83%BD%E7%B2%BE%E9%AD%84%E5%88%BA%E5%AE%A2',
    quality: '史詩',
  },
  '混能精魄‧魔砲': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80777.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40999-%E6%B7%B7%E8%83%BD%E7%B2%BE%E9%AD%84%E9%AD%94%E7%A0%B2',
    quality: '史詩',
  },

  '符能精魄‧金牛': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81036.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41729-%E7%AC%A6%E8%83%BD%E7%B2%BE%E9%AD%84%E9%87%91%E7%89%9B',
    quality: '神話',
  },
  '符能精魄‧銀牛': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81037.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41730-%E7%AC%A6%E8%83%BD%E7%B2%BE%E9%AD%84%E9%8A%80%E7%89%9B',
    quality: '神話',
  },
  星級裝備強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80006.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40559-%E6%98%9F%E7%B4%9A%E8%A3%9D%E5%82%99%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '史詩',
  },
  星級飾品裝備強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80154.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40561-%E6%98%9F%E7%B4%9A%E9%A3%BE%E5%93%81%E8%A3%9D%E5%82%99%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '史詩',
  },
  星級戰利品裝備強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80376.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40563-%E6%98%9F%E7%B4%9A%E6%88%B0%E5%88%A9%E5%93%81%E8%A3%9D%E5%82%99%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '史詩',
  },
  九星必過強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80006.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40577-%E4%B9%9D%E6%98%9F%E5%BF%85%E9%81%8E%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '神話',
  },
  九星必過飾品強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80154.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40587-%E4%B9%9D%E6%98%9F%E5%BF%85%E9%81%8E%E9%A3%BE%E5%93%81%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '神話',
  },
  九星必過戰利品強化卷: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80376.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/40597-%E4%B9%9D%E6%98%9F%E5%BF%85%E9%81%8E%E6%88%B0%E5%88%A9%E5%93%81%E5%BC%B7%E5%8C%96%E5%8D%B7',
    quality: '神話',
  },
  武功秘笈自選寶盒: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80055.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/63779-%E6%AD%A6%E5%8A%9F%E7%A7%98%E7%AC%88%E8%87%AA%E9%81%B8%E5%AF%B6%E7%9B%92',
    quality: '一般',
  },
  四象星宮祝福自選包: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80046.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/63808-%E5%9B%9B%E8%B1%A1%E6%98%9F%E5%AE%AE%E7%A5%9D%E7%A6%8F%E8%87%AA%E9%81%B8%E5%8C%85',
    quality: '一般',
  },
  靈獸護身符自選箱: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80639.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64299-%E9%9D%88%E7%8D%B8%E8%AD%B7%E8%BA%AB%E7%AC%A6%E8%87%AA%E9%81%B8%E7%AE%B1',
    quality: '神話',
  },
  金色滑翔翼自選禮包: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80050.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64011-%E9%87%91%E8%89%B2%E6%BB%91%E7%BF%94%E7%BF%BC%E8%87%AA%E9%81%B8%E7%A6%AE%E5%8C%85',
    quality: '神話',
  },
  // 輝光星靈自選箱I: {
  //   imageURL: 'https://cdn.astraltaledb.com/images/icons/E10131.png',
  //   dataURL:
  //     'https://www.astraltaledb.com/tw/item/64011-%E9%87%91%E8%89%B2%E6%BB%91%E7%BF%94%E7%BF%BC%E8%87%AA%E9%81%B8%E7%A6%AE%E5%8C%85',
  //   quality: '神話',
  // },

  特殊小護身符收藏寶盒: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80639.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64293-%E7%89%B9%E6%AE%8A%E5%B0%8F%E8%AD%B7%E8%BA%AB%E7%AC%A6%E6%94%B6%E8%97%8F%E5%AF%B6%E7%9B%92',
    quality: '神話',
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
    dataURL:
      'https://www.astraltaledb.com/tw/item/41847-%E8%92%BC%E8%AA%93%E9%87%91%E7%BE%BD%E5%A8%9C%E5%A1%94%E8%8E%8E',
    quality: '神話',
  },
  '蒼誓金羽‧悠姬': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81000.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/41573-%E8%92%BC%E8%AA%93%E9%87%91%E7%BE%BD%E6%82%A0%E5%A7%AC',
    quality: '神話',
  },
  '蒼誓金羽‧璃兒': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80691.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/42077-%E8%92%BC%E8%AA%93%E9%87%91%E7%BE%BD%E7%92%83%E5%85%92',
    quality: '神話',
  },
  '蒼誓金羽‧凜': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I81139.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/42051-%E8%92%BC%E8%AA%93%E9%87%91%E7%BE%BD%E5%87%9C',
    quality: '神話',
  },
  高級戰徽滿貫包: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80049.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64020-%E9%AB%98%E7%B4%9A%E6%88%B0%E5%BE%BD%E6%BB%BF%E8%B2%AB%E5%8C%85',
    quality: '神話',
  },
  星光星靈5星滿貫包I: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80045.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64864-%E6%98%9F%E5%85%89%E6%98%9F%E9%9D%885%E6%98%9F%E6%BB%BF%E8%B2%AB%E5%8C%85i',
    quality: '神話',
  },
  星光星靈5星滿貫包II: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80045.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64865-%E6%98%9F%E5%85%89%E6%98%9F%E9%9D%885%E6%98%9F%E6%BB%BF%E8%B2%AB%E5%8C%85ii',
    quality: '神話',
  },
  未鑑定的S級滑翔翼外觀附魔福袋: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80053.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64894-%E6%9C%AA%E9%91%91%E5%AE%9A%E7%9A%84s%E7%B4%9A%E6%BB%91%E7%BF%94%E7%BF%BC%E5%A4%96%E8%A7%80%E9%99%84%E9%AD%94%E7%A6%8F%E8%A2%8B',
    quality: '史詩',
  },
  未鑑定的S級圖形稱號外觀附魔福袋: {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80053.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/64895-%E6%9C%AA%E9%91%91%E5%AE%9A%E7%9A%84s%E7%B4%9A%E5%9C%96%E5%BD%A2%E7%A8%B1%E8%99%9F%E5%A4%96%E8%A7%80%E9%99%84%E9%AD%94%E7%A6%8F%E8%A2%8B',
    quality: '史詩',
  },
  '幻姬‧蒼誓召喚法陣': {
    imageURL: 'https://cdn.astraltaledb.com/images/icons/I80870.png',
    dataURL:
      'https://www.astraltaledb.com/tw/item/42078-%E5%B9%BB%E5%A7%AC%E8%92%BC%E8%AA%93%E5%8F%AC%E5%96%9A%E6%B3%95%E9%99%A3',
    quality: '神話',
  },
};

export default PrizeDatabase;
