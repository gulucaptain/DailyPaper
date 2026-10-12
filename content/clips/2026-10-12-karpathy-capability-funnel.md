---
title: "刚刚，Karpathy称全球只有5000人，真正接触过最前沿AI"
slug: "karpathy-capability-funnel"
date: 2026-10-12T08:55:00+08:00
draft: false
tags: ["Karpathy", "Andrej Karpathy", "能力漏斗 capability funnel", "锯齿状 jaggedness", "RLVR 可验证奖励强化学习", "前沿AI", "机器之心", "剪藏"]
categories: ["观点、人物与社会"]
description: "Karpathy 用四层漏斗（60 亿人没碰过 LLM / 10–20 亿只用免费版 / 2000 万专业用户 / 5000 人有实验室内部访问权）说明：同一个 AI 在不同人眼里的样子完全不同，而决定差距的三个因子是问题规模、能力锯齿状（集中在数字化可验证且赚钱的领域）和访问权限。"
showToc: false
---

> **来源**：机器之心 · 2026-10-12 · [原文链接](https://mp.weixin.qq.com/s/oCdv3qGiBee4KM5eZBuRQw)

> **分类**：观点、人物与社会

---

## 一句话概括

Karpathy 用四层漏斗（60 亿人没碰过 LLM / 10–20 亿只用免费版 / 2000 万专业用户 / 5000 人有实验室内部访问权）说明：同一个 AI 在不同人眼里的样子完全不同，而决定差距的三个因子是问题规模、能力锯齿状（集中在数字化可验证且赚钱的领域）和访问权限。

## 核心要点

- **四层漏斗（他自己的 napkin math，非测量数据）**：~60 亿（75%）几乎没接触过 LLM；~10–20 亿（20%）偶尔用免费版 ChatGPT，眼里是「有点笨的聊天机器人 / 更好用的 Google」；~2000 万（0.2%）在数学与编程上专业使用前沿模型，亲眼见到「过去要几周几个月的项目现在一个 prompt 搞定」；~5000 人（0.00006%）能在实验室内部直接使用最前沿系统。
- **最上面那层看到什么**：成千上万个 Agent 组成集群、连续协作数周做超大型软件工程，自动发现零日漏洞，以机器速度发动和防御网络攻击，产出新的科学成果并推进数学前沿——这些过去要业内顶尖专家干好几年。
- **人类的审查和理解已经开始跟不上**：几个月前的 OpenAI-HF 事件人们还在做「考古式」分析；数学家可能还要花很久逐篇消化那 722 篇前沿数学手稿。
- **漏斗的三个成因**：① 影响力随雄心 / 问题规模 / 时间跨度放大——「一个段落就能答完的问题几乎压榨不出系统能力」，你手里得有一批真正重要、够大够难的问题；② 能力锯齿状——高峰集中在**数字化、可验证、经济价值高**的领域，因为能力来自可验证奖励上的强化学习（RLVR），而训练环境的配比被收入潜力驱动；③ 访问权限——免费版、付费版、内部系统根本不在同一个层级。
- **结论**：普通公众基本没碰过；多数专业人士只感觉到有限的效率提升；极少数人正在体验「曲线突然垂直」的眩晕感——**这三种现实正在同一时刻发生。**

## 金句

> A question with a paragraph answer barely stresses the system. You need a reservoir of big, difficult problems that you really care about.

> Capability peaks in domains that are digital, verifiable and economically valuable. This is because LLM capability emerges from reinforcement learning on verifiable rewards on a curated environment mixture driven by revenue potential.

> The vertigo of the curve going vertical.（曲线突然垂直时的眩晕感）

## 质疑与核查

**（已取到 Karpathy 原推全文逐句比对，见文末核验补充）**

1. ✅ **机器之心这篇转述是忠实的**，四层数字、三个成因、".CodeWriter vertigo" 均与原推一致，没发现编造或错译。这在此类「刚刚体」转载里属于上游水准，值得肯定一次。
2. ⚠️ **标题加码**：「全球只有 5000 人真正接触过最前沿 AI」——原推说的是「~~5,000 people (~0.00006%) with access to **frontier-grade systems internally**」，即**有内部访问权限**，不是「接触过」。差一个限定词，意思从「只有 5000 人见过真的东西」变成「只有 5000 人见过内部系统」，后者才是他的原意。
3. ⭐ **全部数字都是 napkin math，不是测量数据**。原推第一句就是 "Napkin math somewhere around 6B people…"。机器之心保留了「估计」二字（✓），但整篇读下来很容易被当成统计结论。**引用时务必带上"这是他本人的粗略估算"这个限定。**
4. ✅ **百分比自洽**（按全球 80 亿算）：60/80 = 75%；20 亿 = 25%（他说"约 20%"，略保守）；2000 万 / 80 亿 = 0.25%（他说 0.2%）；5000 / 80 亿 = 0.0000625%（他说 0.00006%）。**四项全部自洽，没有算术错误。**
5. ❓ **「722 篇前沿数学手稿」我没能独立核实到原始出处**——目前能查到的都只是转述 Karpathy 这句话。**这条不要当引用用**，要用就去查原文事件。
6. ❓ **「OpenAI-HF 事件」同样未核实**（应是 OpenAI 与 Hugging Face 之间的某个事件，但具体所指需另行确认）。
7. ⚠️ **第 4 层的能力描述全部是单方面叙述，零外部证据**：「数千 Agent 协作数周」「minting zero days」「以机器速度发动和防御网络攻击」——这些都是他一人的说法，没有任何可核实的产出物。**权重应按"内部人士证词"处理，不能按"已知事实"处理。**
8. ⚠️ **信源立场**：Karpathy 本人处在漏斗最顶端（前 Tesla AI 总监、OpenAI 创始成员、现办 Eureka 教育）。他既有信息优势，也有叙事动机。**信息优势成立 ⇒ 可以更信他的观察；但这不等于可以跳过核查**——尤其当某个数字恰好支持你想得出的结论时。

---

> 本文为阅读剪藏（摘要 + 摘录 + 评论），非原文转载。[查看原文](https://mp.weixin.qq.com/s/oCdv3qGiBee4KM5eZBuRQw)
