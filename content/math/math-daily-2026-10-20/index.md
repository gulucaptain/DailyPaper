---
title: "Math 每日速递 · 2026-10-20"
date: "2026-10-20T09:40:53+08:00"
description: "精选3篇：多类型连续状态分支的非爆炸判据、Heisenberg群上分支随机游走的非凸形状，以及奇异分数SDE的耗散参考流。"
categories: ["Math"]
tags: ["math.PR", "分支过程", "非马尔可夫过程", "随机流", "Heisenberg群", "奇异漂移"]
draft: false
showToc: true
tocopen: true
---

本期精选 **3 篇**，关注**分支增长、路径几何与噪声记忆怎样改变随机系统的边界**：多个类型相互繁殖，何时仍能避免有限时爆炸？分支游走离开欧氏空间后，扩张形状为何不再凸？面对奇异漂移，强耗散与带记忆的噪声又能否共同保证唯一性？阅读时建议分别抓住积分判据、各向异性缩放和解类限制，避免把不同层次的结论混在一起。

## 今日论文

### On conservativity of multitype continuous-state branching processes

{{< paper-meta
  authors="Loïc Chaumont、Clément Lamoureux"
  source="arXiv 预印本"
  date="2026-10-16 · v1"
  arxiv="2610.23649"
  fulltext="https://arxiv.org/html/2610.23649v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 单类型连续状态分支过程有 Grey 型非爆炸判据；多个类型相互繁殖后，拉普拉斯指数满足耦合微分方程，通常无法显式求解。本文研究的是保守性，即过程是否始终保持有限状态，而不是灭绝概率。

**核心模型与数学设定：** 令 {{< math >}}Z{{< /math >}} 为 {{< math >}}d{{< /math >}} 类型连续状态分支过程，分支机制 {{< math >}}\psi=(\psi_1,\ldots,\psi_d){{< /math >}} 满足 {{< math >}}\psi(0)=0{{< /math >}}，排除机制本身的杀死项。记

{{< math display="true" >}}
\widetilde\psi_i(r)=\psi_i(r,\ldots,r),\qquad
\psi_{ij}(r)=\psi_j(re_i).
{{< /math >}}

这里积分下标 {{< math >}}0+{{< /math >}} 表示只考察原点附近的可积性。

**主要定理或理论结果：** **定理3.1**给出一个保守性的充分条件：

{{< math display="true" >}}
\int_{0+}\frac{dr}{\left|\sum_{i=1}^{d}\widetilde\psi_i(r)\right|}=\infty.
{{< /math >}}

**定理3.2**从相反方向给出非保守性条件：若存在非空类型集合 {{< math >}}J{{< /math >}}，使每个 {{< math >}}j\in J{{< /math >}} 都满足 {{< math >}}\int_{0+}|\psi_j(re(J))|^{-1}\,dr<\infty{{< /math >}}，其中 {{< math >}}e(J){{< /math >}} 是集合的指示向量，则过程非保守。两者不是对所有机制都互补的充要分类。

**定理3.3**进一步处理二维纯交叉繁殖：两种类型都不繁殖自身，且两个交叉机制均非零。令 {{< math >}}I_1(t)=\int_0^t-\psi_{21}(r)\,dr{{< /math >}}、{{< math >}}I_2(t)=\int_0^t-\psi_{12}(r)\,dr{{< /math >}}，则保守性等价于

{{< math display="true" >}}
\int_{0+}\frac{du}{\psi_{12}(I_2^{-1}(u))\,\psi_{21}(I_1^{-1}(u))}=\infty.
{{< /math >}}

因此，不能把“每条单独繁殖通道都满足一维发散条件”直接当作整个网络不爆炸的证明；原文第3.2节给出了反例。

**方法与证明思路：** 用标量辅助方程夹逼耦合拉普拉斯方程，将零点处解的行为转化为积分条件；纯交叉情形利用两个方程的结构得到可分离关系，进而获得精确判据与 Lamperti 表示的反演。

**与研究主线的关联：** 直接研究多类型分支的爆炸边界，说明决定结果的可能是繁殖通道组成的反馈回路，而不只是各类型单独的增长率。

**值得进一步研究的问题：** **本期提出：** 能否对三类型单一有向环建立类似的精确积分判据？原文一般维数结果尚未回答这一问题。

---

### Nonconvex Carnot Limit Shapes for Branching Random Walks on the Heisenberg Group

{{< paper-meta
  authors="Bohan Hu、Jungang Li、Wen Sun"
  source="arXiv 预印本"
  date="2026-10-16 · v1"
  arxiv="2610.23162"
  fulltext="https://arxiv.org/html/2610.23162v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 欧氏空间中分支随机游走的极限形状通常由凸的大偏差代价约束刻画。Heisenberg 群的中心坐标会记录祖先路径的有向面积，单看水平终点便丢失了信息。本文追问：这种路径依赖的几何量会怎样改变整个族群的扩张形状？

**核心模型与数学设定：** 族谱为 Galton–Watson 树，后代数 {{< math >}}N{{< /math >}} 满足

{{< math display="true" >}}
\rho=\mathbb E N>1,\qquad \mathbb E[N\log_+N]<\infty.
{{< /math >}}

每条边独立均匀选择四个标准水平生成元，与族谱独立。群乘法为 {{< math >}}(x,y,z)(a,b,c)=(x+a,y+b,z+c+xb){{< /math >}}；因此中心坐标累积离散面积。第 {{< math >}}n{{< /math >}} 代位置采用 Carnot 缩放：

{{< math display="true" >}}
(x,y,z)\longmapsto(x/n,y/n,z/n^2).
{{< /math >}}

**主要定理或理论结果：** **定理2.2及推论2.3**表明，在族群生存事件上，增强祖先路径集合及缩放位置集合分别在其路径空间与欧氏空间的 Hausdorff 距离下，几乎必然收敛到确定的紧集。可行水平路径必须在**每个前缀时间**满足

{{< math display="true" >}}
J_t(\omega)\le t\log\rho,\qquad 0\le t\le1,
{{< /math >}}

其中 {{< math >}}J_t{{< /math >}} 是水平增量分布对应的 Cramér 作用量在前缀上的积分；再将路径提升为包含面积的三维轨迹。只约束最终时刻并不足以描述该集合。

**定理2.5**证明：对每个 {{< math >}}\rho>1{{< /math >}}，三维空间极限形状都非凸。**定理2.6**证明在 {{< math >}}\rho\ge4{{< /math >}} 时形状饱和，继续增加平均繁殖数不再扩大该极限集合；这不是说有限代粒子云已经相同。

**方法与证明思路：** 先建立包含面积提升的 Mogulskii 路径大偏差原理，再将稀有路径的代价与分支增长比较。外侧包含由一阶矩控制；内侧覆盖需截断后代、路径跟踪和生存事件上的增长放大，并使用 Kesten–Stigum 定理。几何部分保留竖直纤维结构，避免支撑函数只看见凸包。

**与研究主线的关联：** 这是分支随机游走的形状理论，展示了非交换群几何对增长边界的直接影响。面积来自路径提升，不能因此把它归为转移概率受历史强化的自相互作用游走。

**值得进一步研究的问题：** **本期提出：** 改变四个生成元的概率后，饱和阈值与非凸性是否仍由类似机制决定？本文的统一四方向模型不能直接给出答案。

---

### Regularising Flows and Singular Fractional SDEs with Superlinear Dissipation

{{< paper-meta
  authors="Konstantinos Dareiotis、El Mehdi Haress、Khoa Lê"
  source="arXiv 预印本"
  date="2026-10-16 · v1"
  arxiv="2610.23113"
  fulltext="https://arxiv.org/html/2610.23113v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程、随机流"
>}}

**研究问题与背景：** 本文将噪声的正则化作用与超线性耗散结合，处理可能为分布的漂移。

**核心模型与数学设定：** 方程为 {{< math >}}dX_t=(F+b)(X_t)\,dt+dV_t+dB_t^{t_0}{{< /math >}}，其中 {{< math >}}B^{t_0}{{< /math >}} 为 Hurst 参数 {{< math >}}H\in(0,1){{< /math >}} 的 Riemann–Liouville 过程，{{< math >}}V{{< /math >}} 是初始时刻已知的路径输入。要求 {{< math >}}b\in\mathcal C^\gamma{{< /math >}}，且

{{< math display="true" >}}
\begin{gathered}
\gamma<1,\qquad \gamma>\max\{1-1/(2H),\,2-1/H\},\\
H+\frac1{k-1}>\frac{(1-\gamma)H}{2}.
\end{gathered}
{{< /math >}}

这里 {{< math >}}k>1{{< /math >}}。光滑漂移 {{< math >}}F{{< /math >}} 须满足假设2.3的 {{< math >}}k+1{{< /math >}} 阶强制耗散、规定阶数的多项式导数界及单边 Lipschitz 条件；初值有所有有限阶矩，输入满足假设2.7的局部 Hölder 半范数矩界。

**主要定理或理论结果：** **定理2.8**通过光滑逼近构造解。路径唯一性只在定义2.6的局部参考流比较类内成立，并要求某个 {{< math >}}4+\delta{{< /math >}} 阶边际矩一致有界；不是无条件的所有弱解唯一性。**定理2.9**在固定输入和共同噪声下，给出初值与奇异漂移扰动的定量稳定性。

**方法与证明思路：** 先吸收耗散漂移形成参考流，再结合噪声历史分解、Malliavin 分部积分及 stochastic sewing 控制比较余项。

**与研究主线的关联：** 直接涉及记忆噪声及流的稳定性；本文未建立完整奇异方程的微分同胚流或遍历定理。

**值得进一步研究的问题：** 作者在第7节留下长期行为等问题；**本期提出：** 可先考察这些稳定性估计能否支持共同历史输入下的耦合。

## 本期观察

三篇论文都提醒我们保留“整体结构”：分支网络不能拆成独立通道，面积坐标不能被终点或凸包替代，带记忆方程也不能忽略历史输入与解类。它们讨论的边界分别是非爆炸、可达形状和适定性，不宜混用。

## 阅读建议

- 关注分支爆炸：先读第一篇定理3.1–3.3，对比充分条件与纯交叉情形的充要条件。
- 关注分支空间扩张：读第二篇第2.1–2.4节，先理解中心坐标与面积，再看非凸性。
- 关注记忆噪声与随机流：读第三篇定义2.6、假设2.7及定理2.8–2.9，重点检查唯一性适用的解类。
