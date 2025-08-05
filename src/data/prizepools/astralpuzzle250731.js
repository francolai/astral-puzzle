import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('未鑑定的S級滑翔翼外觀附魔福袋', 0.354));
firstRow.addPrize(new Prize('夏日女王蕾娜的星靈契約書', 0.472, 5));
firstRow.addPrize(new Prize('高級時裝染色劑福袋', 5));
firstRow.addPrize(new Prize('掉寶+1護符', 44.174));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 46.54));
secondRow.addPrize(new Prize('金色滑翔翼自選禮包', 0.275));
secondRow.addPrize(new Prize('冥夜鬼刀五星滿貫禮盒', 0.112));
secondRow.addPrize(new Prize('時裝重組卷軸', 3.063));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.537));
thirdRow.addPrize(new Prize('背飾‧悠然海洋幻螈(金)', 1));
thirdRow.addPrize(new Prize('背飾‧活力海洋幻螈(金)', 1));
thirdRow.addPrize(new Prize('混能精魄自選包IV', 0.463));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('背飾‧悠然海洋幻螈(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧活力海洋幻螈(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒III', 0.54));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('夏夜鬼刀凜的星靈契約書', 0.362, 5));
fifthRow.addPrize(new Prize('夏夜鬼刀凜護身符', 0.231));
fifthRow.addPrize(new Prize('靈獸護身符自選箱', 0.289));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.431));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
