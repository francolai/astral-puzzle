import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特選項鍊附魔‧爆傷α', 0.35));
firstRow.addPrize(new Prize('特選項鍊附魔‧頭目爆傷α', 0.35));
firstRow.addPrize(new Prize('特殊小護身符收藏寶盒', 0.206));
firstRow.addPrize(new Prize('掉寶+1護符', 49.094));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.855));
secondRow.addPrize(new Prize('特選項鍊附魔‧造傷α', 0.35));
secondRow.addPrize(new Prize('特選項鍊附魔‧頭目造傷α', 0.35));
secondRow.addPrize(new Prize('莓莓的星靈契約書', 0.445, 5));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.667));
thirdRow.addPrize(new Prize('背飾‧墮落六翼天使(金)', 1));
thirdRow.addPrize(new Prize('背飾‧輝煌六翼天使(金)', 1));
thirdRow.addPrize(new Prize('武功秘笈自選寶盒', 0.333));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.7, 3));
fourthRow.addPrize(new Prize('背飾‧墮落六翼天使(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧輝煌六翼天使(粉金)', 0.5));
fourthRow.addPrize(new Prize('四象星宮祝福自選包', 0.3));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('星光星靈5星滿貫包II', 0.144));
fifthRow.addPrize(new Prize('蒼誓金羽‧璃兒', 0.15));
fifthRow.addPrize(new Prize('靈獸護身符自選箱', 0.3));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.719));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
