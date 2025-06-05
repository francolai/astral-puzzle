import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('混能精魄‧獵人', 0.31));
firstRow.addPrize(new Prize('混能精魄‧鬥士', 0.31));
firstRow.addPrize(new Prize('未鑑定的S級滑翔翼外觀附魔福袋', 0.25));
firstRow.addPrize(new Prize('掉寶+1護符', 49.13));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.062));
secondRow.addPrize(new Prize('混能精魄‧刺客', 0.344));
secondRow.addPrize(new Prize('混能精魄‧魔砲', 0.344));
secondRow.addPrize(new Prize('未鑑定的S級圖形稱號外觀附魔福袋', 0.25));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('武器‧銀月之舞雙刀(金)', 1));
thirdRow.addPrize(new Prize('武器‧風魔之噬雙刀(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒V', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('武器‧銀月之舞雙刀(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧風魔之噬雙刀(粉金)', 0.5));
fourthRow.addPrize(new Prize('金色滑翔翼自選禮包', 0.324));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('輝光星靈自選箱I', 0.165));
fifthRow.addPrize(new Prize('蒼誓金羽‧凜', 0.152));
fifthRow.addPrize(new Prize('高級戰徽滿貫包', 0.3));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.696));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
