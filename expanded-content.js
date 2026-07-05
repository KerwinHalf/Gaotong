(function () {
  const T = (id, label, exam, summary, core, steps) => ({ id, label, exam, summary, core, steps });
  const S = (title, formulas, notes, exam) => ({ title, formulas, notes, exam });

  window.EXPANDED_DATA = [
    {
      id: "ensemble",
      name: "系综理论",
      topics: [
        T("entropy", "最大熵原理", "考试要求 1-2", "从 Gibbs 熵一步步推出 Boltzmann 权重", "p<sub>i</sub>=e<sup>-βE<sub>i</sub></sup>/Z", [
          S("01 先定义微观态概率和 Gibbs 熵", [
            "系统可能处在微观态 i，概率为 p<sub>i</sub>。",
            "概率必须满足归一化：Σ<sub>i</sub>p<sub>i</sub>=1。",
            "Gibbs 统计熵定义为 S=-k<sub>B</sub>Σ<sub>i</sub>p<sub>i</sub>ln p<sub>i</sub>。",
            "若所有 W 个可达微观态等概率，p<sub>i</sub>=1/W，则 S=k<sub>B</sub>ln W，退化为 Boltzmann 熵。"
          ], [
            "这一步说明 Gibbs 熵比 Boltzmann 熵更一般：它允许每个微观态概率不同。",
            "后面要找的是概率分布本身，所以不能先假设等概率。",
            "考试中先写熵定义，再写约束，逻辑会比直接背结论稳得多。"
          ], "先把 S 和两个约束写全，这是最大熵推导的起点。"),
          S("02 写出正则问题的两个约束", [
            "正则系综中 N、V 固定，系统只与热库交换能量。",
            "宏观上给定平均能量：U=Σ<sub>i</sub>p<sub>i</sub>E<sub>i</sub>。",
            "约束一：Σ<sub>i</sub>p<sub>i</sub>-1=0。",
            "约束二：Σ<sub>i</sub>p<sub>i</sub>E<sub>i</sub>-U=0。"
          ], [
            "归一化保证 p<sub>i</sub> 是概率；平均能量保证这些概率描述同一个宏观平衡态。",
            "如果少写能量约束，只会得到等概率分布，那是微正则而不是正则。",
            "这里的 U 是固定的宏观输入，不随变分改变。"
          ], "正则分布来自能量平均约束，不是凭空指定的指数形式。"),
          S("03 构造带乘子的无约束泛函", [
            "把 S/k<sub>B</sub> 作为目标函数，令 Φ=-Σ<sub>i</sub>p<sub>i</sub>ln p<sub>i</sub>-α(Σ<sub>i</sub>p<sub>i</sub>-1)-β(Σ<sub>i</sub>p<sub>i</sub>E<sub>i</sub>-U)。",
            "α 对应归一化约束。",
            "β 对应平均能量约束。",
            "极值条件是 δΦ=0。"
          ], [
            "β 在这里还只是拉格朗日乘子，暂时不要把它直接叫温度。",
            "把常数 1 和 U 写进括号，是为了清楚标明变分时哪些量保持不变。",
            "这一步把受约束极值问题变成普通极值问题。"
          ], "不要跳过 Φ 的构造。很多推导不完整就是从这里开始漏分。"),
          S("04 逐项变分并得到每个微观态的方程", [
            "δ[-p<sub>i</sub>ln p<sub>i</sub>]=-(ln p<sub>i</sub>+1)δp<sub>i</sub>。",
            "δ[-αΣ<sub>i</sub>p<sub>i</sub>]=-αΣ<sub>i</sub>δp<sub>i</sub>。",
            "δ[-βΣ<sub>i</sub>p<sub>i</sub>E<sub>i</sub>]=-βΣ<sub>i</sub>E<sub>i</sub>δp<sub>i</sub>。",
            "所以 δΦ=Σ<sub>i</sub>[-(ln p<sub>i</sub>+1)-α-βE<sub>i</sub>]δp<sub>i</sub>。"
          ], [
            "关键导数是 d(p ln p)/dp=ln p+1。",
            "每个 δp<sub>i</sub> 可以独立变化，所以括号中的系数必须逐项为零。",
            "这一步给出微观态概率和能量之间的函数关系。"
          ], "写出 δΦ 的求和式，比只写最终答案更像完整推导。"),
          S("05 解出指数型概率权重", [
            "由 -(ln p<sub>i</sub>+1)-α-βE<sub>i</sub>=0 得 ln p<sub>i</sub>=-1-α-βE<sub>i</sub>。",
            "两边取指数：p<sub>i</sub>=e<sup>-1-α</sup>e<sup>-βE<sub>i</sub></sup>。",
            "所有与 i 无关的因子都可并入归一化常数。",
            "因此 p<sub>i</sub> 正比于 e<sup>-βE<sub>i</sub></sup>。"
          ], [
            "指数权重不是假设，而是最大熵和平均能量约束共同推出的。",
            "能量越高，若 β>0，概率越低，这和热平衡直觉一致。",
            "到这一步还没有确定 e<sup>-1-α</sup> 的具体值。"
          ], "Boltzmann 因子的来源必须说清：最大熵 + 能量约束。"),
          S("06 用归一化定义配分函数", [
            "由 Σ<sub>i</sub>p<sub>i</sub>=1 得 e<sup>-1-α</sup>Σ<sub>i</sub>e<sup>-βE<sub>i</sub></sup>=1。",
            "定义 Z=Σ<sub>i</sub>e<sup>-βE<sub>i</sub></sup>。",
            "于是 e<sup>-1-α</sup>=1/Z。",
            "最终 p<sub>i</sub>=e<sup>-βE<sub>i</sub></sup>/Z。"
          ], [
            "Z 的第一层含义就是归一化分母。",
            "后面它又会成为生成热力学量的函数，所以叫配分函数。",
            "这个 Z 与系统的能级结构有关，因此包含了全部统计信息。"
          ], "Z 不是凭空定义的；它从概率归一化自然出现。"),
          S("07 把 β 识别为温度", [
            "由 ln p<sub>i</sub>=-βE<sub>i</sub>-lnZ。",
            "代入熵：S=-k<sub>B</sub>Σp<sub>i</sub>lnp<sub>i</sub>=k<sub>B</sub>βU+k<sub>B</sub>lnZ。",
            "热力学定义给出 1/T=(∂S/∂U)<sub>V,N</sub>。",
            "比较可得 β=1/(k<sub>B</sub>T)。"
          ], [
            "这一步把数学乘子 β 和物理温度连接起来。",
            "如果不做这一步，只得到一个形式参数，没有完成物理识别。",
            "温度可理解为熵对能量变化的响应。"
          ], "最后必须写 β=1/(k<sub>B</sub>T)，并说明来自热力学比较。"),
          S("08 得到正则系综的密度算符形式", [
            "量子情形下将微观态 i 换成能量本征态 |i>。",
            "密度算符 ρ=Σ<sub>i</sub>p<sub>i</sub>|i〉〈i|。",
            "代入正则概率得到 ρ=e<sup>-βH</sup>/Z。",
            "其中 Z=Tr e<sup>-βH</sup>。"
          ], [
            "这就是教材里正则密度算符的来源。",
            "Tr 表示对完整量子态空间求迹，相当于对所有微观态求和。",
            "后续量子理想气体和二次量子化都从这个迹公式出发。"
          ], "从 p<sub>i</sub> 到 ρ 的转换，是经典统计到量子统计的桥。")
        ]),

        T("canonical", "正则与巨正则", "考试要求 3-5", "特性函数、涨落和系综等价的完整链条", "F=-k<sub>B</sub>TlnZ，Ω=-k<sub>B</sub>TlnΞ", [
          S("01 正则配分函数产生平均能量", [
            "正则概率 p<sub>i</sub>=e<sup>-βE<sub>i</sub></sup>/Z。",
            "Z=Σ<sub>i</sub>e<sup>-βE<sub>i</sub></sup>。",
            "∂Z/∂β=Σ<sub>i</sub>(-E<sub>i</sub>)e<sup>-βE<sub>i</sub></sup>。",
            "∂lnZ/∂β=(1/Z)∂Z/∂β=-Σ<sub>i</sub>E<sub>i</sub>p<sub>i</sub>=-U。"
          ], [
            "求 β 导数会把能量从指数中带出来。",
            "这是配分函数成为热力学生成函数的第一步。",
            "记公式时也要知道中间的 (1/Z) 从哪里来。"
          ], "必写 U=-∂lnZ/∂β。"),
          S("02 由熵推出 Helmholtz 自由能", [
            "lnp<sub>i</sub>=-βE<sub>i</sub>-lnZ。",
            "S=-k<sub>B</sub>Σp<sub>i</sub>lnp<sub>i</sub>=k<sub>B</sub>βU+k<sub>B</sub>lnZ。",
            "F=U-TS。",
            "代入 β=1/(k<sub>B</sub>T)，得 F=U-T(k<sub>B</sub>βU+k<sub>B</sub>lnZ)=-k<sub>B</sub>TlnZ。"
          ], [
            "这说明 F 不是新假设，而是从正则分布和熵定义推出的。",
            "正则系综的自然变量是 T、V、N，所以特性函数就是 F。",
            "考试题写“统计表达式推导”时，这段必须完整。"
          ], "把 S=k<sub>B</sub>βU+k<sub>B</sub>lnZ 写出来。"),
          S("03 由 F 得到热力学量", [
            "热力学微分 dF=-SdT-PdV+μdN。",
            "S=-(∂F/∂T)<sub>V,N</sub>。",
            "P=-(∂F/∂V)<sub>T,N</sub>。",
            "μ=(∂F/∂N)<sub>T,V</sub>。"
          ], [
            "特性函数的意义是：对自然变量求偏导就得到共轭热力学量。",
            "正则系综中 V 依赖进入能级 E<sub>i</sub>(V)，进而进入 Z。",
            "理想气体状态方程也可以从 P=-(∂F/∂V)<sub>T,N</sub> 得到。"
          ], "写 F 后一定接热力学微分关系。"),
          S("04 正则能量涨落的一阶关系", [
            "U=-∂lnZ/∂β。",
            "再求导：∂U/∂β=-∂<sup>2</sup>lnZ/∂β<sup>2</sup>。",
            "计算二阶导数：∂<sup>2</sup>lnZ/∂β<sup>2</sup>=〈E<sup>2</sup>〉-〈E〉<sup>2</sup>。",
            "所以 〈(ΔE)<sup>2</sup>〉=-∂U/∂β。"
          ], [
            "二阶导数给方差，这是涨落理论最常用的结构。",
            "这里的平均都按正则概率进行。",
            "不要把 〈E<sup>2</sup>〉 和 〈E〉<sup>2</sup> 混写。"
          ], "涨落题从二阶导数开始写。"),
          S("05 把 β 导数改成温度导数", [
            "β=1/(k<sub>B</sub>T)。",
            "dβ/dT=-1/(k<sub>B</sub>T<sup>2</sup>)。",
            "∂U/∂β=(∂U/∂T)<sub>V,N</sub>(dT/dβ)。",
            "C<sub>V</sub>=(∂U/∂T)<sub>V,N</sub>，故 〈(ΔE)<sup>2</sup>〉=k<sub>B</sub>T<sup>2</sup>C<sub>V</sub>。"
          ], [
            "这一步把统计涨落和可测热容联系起来。",
            "宏观系统 C<sub>V</sub> 通常正比于 N，因此能量涨落标准差正比于 N<sup>1/2</sup>。",
            "平均能量正比于 N，所以相对涨落正比于 N<sup>-1/2</sup>。"
          ], "系综等价的核心证据：相对涨落随 N 增大而消失。"),
          S("06 从正则推广到巨正则", [
            "巨正则允许系统与外界交换能量和粒子。",
            "权重变为 e<sup>-β(E<sub>r,N</sub>-μN)</sup>。",
            "巨配分函数 Ξ=Σ<sub>N</sub>Σ<sub>r</sub>e<sup>-β(E<sub>r,N</sub>-μN)</sup>。",
            "巨势 Ω=-k<sub>B</sub>TlnΞ。"
          ], [
            "E-μN 是热库与粒子库共同控制下的有效能量。",
            "巨正则的自然变量是 T、V、μ。",
            "量子理想气体最适合用巨正则，因为每个单粒子态的占据数可以独立求和。"
          ], "巨正则要写双重求和：先 N，再固定 N 的微观态。"),
          S("07 从 Ξ 求平均粒子数和能量", [
            "∂lnΞ/∂μ=(1/Ξ)Σ βN e<sup>-β(E-μN)</sup>=β〈N〉。",
            "所以 〈N〉=(1/β)(∂lnΞ/∂μ)<sub>T,V</sub>。",
            "∂lnΞ/∂β= -〈E-μN〉。",
            "所以 〈E〉=-∂lnΞ/∂β+μ〈N〉。"
          ], [
            "对 μ 求导带下 N；对 β 求导带下 E-μN。",
            "这两条公式后面会直接用于费米/玻色气体。",
            "注意求 β 导数时 μ 固定。"
          ], "粒子数和能量都要从 lnΞ 的导数推出。"),
          S("08 巨势的热力学微分和 Ω=-PV", [
            "定义 Ω=U-TS-μN。",
            "由 dU=TdS-PdV+μdN。",
            "dΩ=dU-TdS-SdT-μdN-Ndμ=-SdT-PdV-Ndμ。",
            "均匀体系满足 Euler 关系 U=TS-PV+μN，因此 Ω=-PV。"
          ], [
            "这一步说明 Ω 是 T、V、μ 的特性函数。",
            "Ω=-PV 只在热力学极限的均匀体系中直接成立。",
            "由 Ω=-k<sub>B</sub>TlnΞ 和 Ω=-PV 可以得到状态方程。"
          ], "巨势推导要同时写 Legendre 变换和微分。"),
          S("09 粒子数涨落", [
            "〈N〉=(1/β)∂lnΞ/∂μ。",
            "∂〈N〉/∂μ=(1/β)∂<sup>2</sup>lnΞ/∂μ<sup>2</sup>。",
            "直接求二阶导数得 ∂<sup>2</sup>lnΞ/∂μ<sup>2</sup>=β<sup>2</sup>(〈N<sup>2</sup>〉-〈N〉<sup>2</sup>)。",
            "因此 〈(ΔN)<sup>2</sup>〉=k<sub>B</sub>T(∂〈N〉/∂μ)<sub>T,V</sub>。"
          ], [
            "这与正则能量涨落完全平行。",
            "粒子数涨落也随系统规模增大呈 N<sup>1/2</sup>，相对涨落趋零。",
            "这就是巨正则和正则在热力学极限下等价的原因。"
          ], "系综等价不是口号，要用涨落公式说明。"),
          S("10 经典理想气体状态方程的统计推导", [
            "单粒子平动配分函数 Z<sub>1</sub>=V/λ<sub>th</sub><sup>3</sup>。",
            "N 个不可分辨经典粒子：Z<sub>N</sub>=Z<sub>1</sub><sup>N</sup>/N!。",
            "F=-k<sub>B</sub>TlnZ<sub>N</sub>。",
            "P=-(∂F/∂V)<sub>T,N</sub>=k<sub>B</sub>T(∂lnZ<sub>N</sub>/∂V)<sub>T,N</sub>=Nk<sub>B</sub>T/V。"
          ], [
            "V 只通过 Z<sub>1</sub> 的因子进入，因此求导非常直接。",
            "N! 体现不可分辨性，解决 Gibbs 佯谬。",
            "这一段对应考试要求里的理想气体状态方程统计表达式。"
          ], "从 Z<sub>N</sub> 到 P 的偏导要写出来。")
        ]),

        T("idealgas", "简并判据", "考试要求 量子气体 1", "热德布罗意波长与经典极限", "nλ<sub>th</sub><sup>3</sup>", [
          S("01 热德布罗意波长来自热动量", [
            "热运动典型动能满足 p<sup>2</sup>/(2m)≈k<sub>B</sub>T。",
            "热动量尺度 p<sub>th</sub>≈(2mk<sub>B</sub>T)<sup>1/2</sup>。",
            "量子波长尺度 λ≈h/p<sub>th</sub>。",
            "更精确地在配分函数中定义 λ<sub>th</sub>=h/(2πmk<sub>B</sub>T)<sup>1/2</sup>。"
          ], [
            "温度越高，热动量越大，波长越短。",
            "密度越大，粒子间距越小，波包越容易重叠。",
            "量子统计是否重要由波长和平均间距共同决定。"
          ], "写出 λ<sub>th</sub> 的定义和物理意义。"),
          S("02 简并参数的来源", [
            "数密度 n=N/V。",
            "平均每个粒子占据体积约为 n<sup>-1</sup>。",
            "热波包体积约为 λ<sub>th</sub><sup>3</sup>。",
            "二者比值 η=nλ<sub>th</sub><sup>3</sup>。"
          ], [
            "η 小，波包互不重叠，粒子可近似区分。",
            "η 接近一，交换效应开始重要。",
            "η 大，必须使用费米或玻色统计。"
          ], "量子与经典的判据不是温度单独决定，而是 nλ<sub>th</sub><sup>3</sup>。"),
          S("03 经典极限的分布函数", [
            "费米分布 f<sub>F</sub>=1/[e<sup>β(ε-μ)</sup>+1]。",
            "玻色分布 f<sub>B</sub>=1/[e<sup>β(ε-μ)</sup>-1]。",
            "若 e<sup>β(ε-μ)</sup> 很大，则 ±1 可忽略。",
            "两者都化为 f≈e<sup>-β(ε-μ)</sup>=ze<sup>-βε</sup>。"
          ], [
            "z=e<sup>βμ</sup> 称为逸度。",
            "经典极限对应 z 很小，也对应 nλ<sub>th</sub><sup>3</sup> 很小。",
            "这解释了为什么高温低密度下三种统计给同一结果。"
          ], "把 ±1 忽略的条件写清楚。")
        ])
      ]
    },

    {
      id: "quantum",
      name: "量子统计",
      topics: [
        T("fdbe", "费米/玻色分布", "考试要求 2-3", "从二次量子化哈密顿量推到单态占据", "n̄=1/(e<sup>β(ε-μ)</sup>±1)", [
          S("01 写出占据数表象的 H 和 N", [
            "理想量子气体无相互作用，哈密顿量 H=Σ<sub>k</sub>ε<sub>k</sub>n<sub>k</sub>。",
            "总粒子数 N=Σ<sub>k</sub>n<sub>k</sub>。",
            "巨正则指数中出现 H-μN=Σ<sub>k</sub>(ε<sub>k</sub>-μ)n<sub>k</sub>。",
            "每个 k 模式只通过自己的 n<sub>k</sub> 出现。"
          ], [
            "二次量子化把多体态写成每个单粒子态的占据数。",
            "理想气体没有相互作用项，所以不同 k 模式独立。",
            "这一步是巨配分函数因式分解的前提。"
          ], "先写 H、N、H-μN，顺序不要乱。"),
          S("02 巨配分函数因式分解", [
            "Ξ=Tr e<sup>-β(H-μN)</sup>。",
            "对所有占据数组合求和：Ξ=Σ<sub>{n<sub>k</sub>}</sub>exp[-βΣ<sub>k</sub>(ε<sub>k</sub>-μ)n<sub>k</sub>]。",
            "指数中的求和可拆为乘积：exp[-βΣ<sub>k</sub>A<sub>k</sub>]=Π<sub>k</sub>e<sup>-βA<sub>k</sub></sup>。",
            "因此 Ξ=Π<sub>k</sub>Σ<sub>n<sub>k</sub></sub>e<sup>-β(ε<sub>k</sub>-μ)n<sub>k</sub></sup>。"
          ], [
            "迹是对所有 Fock 态求和。",
            "从总求和变成单模求和，是理想气体最重要的简化。",
            "费米和玻色的差别只剩 n<sub>k</sub> 的取值范围。"
          ], "必须出现 Π<sub>k</sub>Σ<sub>n<sub>k</sub></sub> 这一行。"),
          S("03 费米单态配分函数", [
            "费米子满足 Pauli 原理，所以 n<sub>k</sub>=0 或 1。",
            "Ξ<sub>k</sub><sup>F</sup>=Σ<sub>n=0</sub><sup>1</sup>e<sup>-β(ε<sub>k</sub>-μ)n</sup>。",
            "代入 n=0 得 1，代入 n=1 得 e<sup>-β(ε<sub>k</sub>-μ)</sup>。",
            "所以 Ξ<sub>k</sub><sup>F</sup>=1+e<sup>-β(ε<sub>k</sub>-μ)</sup>。"
          ], [
            "分母的加号来自占据数上限为 1。",
            "这不是记忆技巧，而是 Pauli 原理的统计后果。",
            "lnΞ<sup>F</sup>=Σ<sub>k</sub>ln[1+e<sup>-β(ε<sub>k</sub>-μ)</sup>]。"
          ], "费米子不能用无限几何级数。"),
          S("04 玻色单态配分函数", [
            "玻色子允许 n<sub>k</sub>=0,1,2,...。",
            "设 x=e<sup>-β(ε<sub>k</sub>-μ)</sup>。",
            "Ξ<sub>k</sub><sup>B</sup>=Σ<sub>n=0</sub><sup>∞</sup>x<sup>n</sup>。",
            "当 |x|&lt;1 时，Ξ<sub>k</sub><sup>B</sup>=1/(1-x)。"
          ], [
            "收敛要求 ε<sub>k</sub>-μ>0，即 μ 小于最低能级。",
            "这就是理想玻色气体化学势不能超过基态能量的原因。",
            "lnΞ<sup>B</sup>=-Σ<sub>k</sub>ln[1-e<sup>-β(ε<sub>k</sub>-μ)</sup>]。"
          ], "玻色推导要写几何级数和收敛条件。"),
          S("05 从 Ξ<sub>k</sub> 求平均占据数", [
            "平均占据可直接求和：n̄<sub>k</sub>=Σ n e<sup>-β(ε-μ)n</sup>/Σ e<sup>-β(ε-μ)n</sup>。",
            "也可用导数：n̄<sub>k</sub>=-(1/β)∂lnΞ<sub>k</sub>/∂ε<sub>k</sub>。",
            "导数对 ε<sub>k</sub> 作用，会把 n 带下来。",
            "这是单态占据从配分函数导出的统一公式。"
          ], [
            "这一行最能体现从配分函数出发，而不是直接写分布。",
            "求 ε 导数时 μ 和 T 固定。",
            "费米与玻色只需代入不同的 Ξ<sub>k</sub>。"
          ], "考试要求写“从配分函数推导分布”，不能省掉导数公式。"),
          S("06 得到 Fermi-Dirac 分布", [
            "lnΞ<sub>k</sub><sup>F</sup>=ln(1+x)，x=e<sup>-β(ε<sub>k</sub>-μ)</sup>。",
            "∂lnΞ<sub>k</sub><sup>F</sup>/∂ε<sub>k</sub>=(1/(1+x))(-βx)。",
            "n̄<sub>k</sub>=x/(1+x)。",
            "化简得 n̄<sub>k</sub>=1/[e<sup>β(ε<sub>k</sub>-μ)</sup>+1]。"
          ], [
            "最后一步将 x/(1+x) 分子分母同除以 x。",
            "T=0 时它变成费米面处的阶跃函数。",
            "低能态不能超过 1，是费米分布的核心特征。"
          ], "加号对应费米子。"),
          S("07 得到 Bose-Einstein 分布", [
            "lnΞ<sub>k</sub><sup>B</sup>=-ln(1-x)。",
            "∂lnΞ<sub>k</sub><sup>B</sup>/∂ε<sub>k</sub>=-(1/(1-x))(βx)。",
            "n̄<sub>k</sub>=x/(1-x)。",
            "化简得 n̄<sub>k</sub>=1/[e<sup>β(ε<sub>k</sub>-μ)</sup>-1]。"
          ], [
            "减号来自几何级数的 1/(1-x)。",
            "当 μ 接近最低能级时，基态占据可以宏观变大。",
            "这为 BEC、声子和光子的统计铺路。"
          ], "减号对应玻色子，并写清 μ 的限制。")
        ]),

        T("fermi", "理想费米气", "考试要求 4-7", "DOS、零温性质、状态方程与 Sommerfeld 展开", "C<sub>V</sub>=γT", [
          S("01 从 k 空间数态", [
            "周期边界条件下，k<sub>x</sub>=2πn<sub>x</sub>/L，其他方向类似。",
            "k 空间每个态占据体积 (2π/L)<sup>3</sup>。",
            "半径 k 到 k+dk 的球壳体积为 4πk<sup>2</sup>dk。",
            "含自旋简并 g<sub>s</sub> 时，态数 dN=g<sub>s</sub>V4πk<sup>2</sup>dk/(2π)<sup>3</sup>。"
          ], [
            "DOS 的根本是 k 空间数格点。",
            "三维球壳面积带来 k<sup>2</sup> 因子。",
            "电子通常 g<sub>s</sub>=2。"
          ], "先数 k 态，再换成能量态密度。"),
          S("02 变量替换得到三维 DOS", [
            "自由粒子能量 ε=ℏ<sup>2</sup>k<sup>2</sup>/(2m)。",
            "k=(2mε)<sup>1/2</sup>/ℏ。",
            "dk/dε=m/(ℏ<sup>2</sup>k)。",
            "D(ε)=dN/dε=g<sub>s</sub>V(2m/ℏ<sup>2</sup>)<sup>3/2</sup>ε<sup>1/2</sup>/(4π<sup>2</sup>)。"
          ], [
            "三维非相对论自由粒子 DOS 正比于 √ε。",
            "二维 DOS 是常数，一维 DOS 低能发散，不要混淆。",
            "后面所有 N、U、C<sub>V</sub> 积分都用这个 D(ε)。"
          ], "变量替换时一定写 dk/dε。"),
          S("03 零温费米面与费米能", [
            "T=0 时 f(ε)=1，当 ε&lt;E<sub>F</sub>；f(ε)=0，当 ε&gt;E<sub>F</sub>。",
            "粒子数 N=∫<sub>0</sub><sup>E<sub>F</sub></sup>D(ε)dε。",
            "若 D(ε)=Cε<sup>1/2</sup>，则 N=(2C/3)E<sub>F</sub><sup>3/2</sup>。",
            "等价地 n=g<sub>s</sub>k<sub>F</sub><sup>3</sup>/(6π<sup>2</sup>)。"
          ], [
            "费米子在零温不是全在基态，而是从低到高填满到 E<sub>F</sub>。",
            "E<sub>F</sub> 由粒子数密度决定。",
            "对于电子 g<sub>s</sub>=2，所以 k<sub>F</sub>=(3π<sup>2</sup>n)<sup>1/3</sup>。"
          ], "写清 T=0 阶跃分布和 N 积分。"),
          S("04 零温内能", [
            "内能 U=∫<sub>0</sub><sup>E<sub>F</sub></sup>εD(ε)dε。",
            "代入 D(ε)=Cε<sup>1/2</sup> 得 U=C∫<sub>0</sub><sup>E<sub>F</sub></sup>ε<sup>3/2</sup>dε。",
            "积分给 U=(2C/5)E<sub>F</sub><sup>5/2</sup>。",
            "与 N=(2C/3)E<sub>F</sub><sup>3/2</sup> 相除，得 U/N=3E<sub>F</sub>/5。"
          ], [
            "平均能量不是 E<sub>F</sub>，而是 3E<sub>F</sub>/5。",
            "这来自三维 DOS 的 ε<sup>1/2</sup> 权重。",
            "这段积分是高频考试推导。"
          ], "不要只背 U=3NE<sub>F</sub>/5，要写两个积分相除。"),
          S("05 简并压与状态方程", [
            "非相对论自由粒子气体满足 PV=2U/3。",
            "因此 T=0 时 P=2U/(3V)=2nE<sub>F</sub>/5。",
            "又 E<sub>F</sub>=ℏ<sup>2</sup>(3π<sup>2</sup>n)<sup>2/3</sup>/(2m) 对电子成立。",
            "所以 P 正比于 n<sup>5/3</sup>。"
          ], [
            "这就是非相对论简并电子气状态方程。",
            "压强来自 Pauli 原理造成的动量填充，不来自热运动。",
            "白矮星的简并压物理图像就从这里来。"
          ], "写出 P∝n<sup>5/3</sup>，体现物理理解。"),
          S("06 Sommerfeld 展开的目标", [
            "有限低温时 N=∫<sub>0</sub><sup>∞</sup>D(ε)f(ε)dε。",
            "U=∫<sub>0</sub><sup>∞</sup>εD(ε)f(ε)dε。",
            "f(ε)=1/[e<sup>β(ε-μ)</sup>+1]。",
            "低温只改变 μ 附近宽度约 k<sub>B</sub>T 的薄层。"
          ], [
            "Sommerfeld 展开是把费米函数积分转成零温积分加温度修正。",
            "费米海深处仍被填满，远高于费米面的态仍几乎为空。",
            "所以热容比经典结果小得多，只与费米面附近态密度有关。"
          ], "先写 N 和 U 的积分形式。"),
          S("07 Sommerfeld 展开公式", [
            "对光滑函数 φ(ε)，有 ∫<sub>0</sub><sup>∞</sup>φ(ε)f(ε)dε。",
            "低温展开为 ∫<sub>0</sub><sup>μ</sup>φ(ε)dε+(π<sup>2</sup>/6)(k<sub>B</sub>T)<sup>2</sup>φ'(μ)+O(T<sup>4</sup>)。",
            "用于粒子数时 φ(ε)=D(ε)。",
            "用于内能时 φ(ε)=εD(ε)。"
          ], [
            "展开中的奇次温度项消失，首个修正是 T<sup>2</sup>。",
            "固定粒子数时 μ 会随 T 稍微下降。",
            "考试若要求会用 Sommerfeld 展开，至少要写出这条公式。"
          ], "公式中是 φ'(μ)，不是 φ(μ)。"),
          S("08 化学势低温修正", [
            "固定 N：N=∫<sub>0</sub><sup>μ</sup>D(ε)dε+(π<sup>2</sup>/6)(k<sub>B</sub>T)<sup>2</sup>D'(μ)。",
            "零温 N=∫<sub>0</sub><sup>E<sub>F</sub></sup>D(ε)dε。",
            "令 μ=E<sub>F</sub>+δμ，并保留 T<sup>2</sup> 项。",
            "三维自由气体得 μ(T)=E<sub>F</sub>[1-(π<sup>2</sup>/12)(T/T<sub>F</sub>)<sup>2</sup>]。"
          ], [
            "温度升高后分布尾部占据高能态，为保持 N 不变，μ 略微降低。",
            "这一步常被省略，但严格推热容时必须知道固定 N 的修正。",
            "T<sub>F</sub>=E<sub>F</sub>/k<sub>B</sub>。"
          ], "固定 N 是 Sommerfeld 热容推导的隐含条件。"),
          S("09 内能和电子热容", [
            "对 U 用 φ(ε)=εD(ε)。",
            "保留固定 N 后的 μ 修正，三维自由费米气得到 U(T)=U(0)+(π<sup>2</sup>/6)D(E<sub>F</sub>)(k<sub>B</sub>T)<sup>2</sup>。",
            "因此 C<sub>V</sub>=(∂U/∂T)<sub>V,N</sub>=(π<sup>2</sup>/3)k<sub>B</sub><sup>2</sup>D(E<sub>F</sub>)T。",
            "用 D(E<sub>F</sub>)=3N/(2E<sub>F</sub>) 得 C<sub>V</sub>=(π<sup>2</sup>/2)Nk<sub>B</sub>T/T<sub>F</sub>。"
          ], [
            "电子热容线性于 T。",
            "低温实验常写 C=γT+βT<sup>3</sup>，其中 γ 来自电子，β 来自声子。",
            "电子热容小是因为只有费米面附近薄层能被热激发。"
          ], "最后写 C<sub>V</sub>=γT，并给出 γ。")
        ]),

        T("phonon", "声子与 Debye", "考试要求 8-9", "一维链量子化、声子 DOS、Debye 热容", "C<sub>V</sub>∝T<sup>3</sup>", [
          S("01 写出一维单原子链 Hamilton 量", [
            "N 个质量 M 的原子，位移 x<sub>n</sub>，动量 p<sub>n</sub>。",
            "最近邻弹簧耦合，力常数 K=Mω<sub>0</sub><sup>2</sup>。",
            "H=Σ<sub>n</sub>p<sub>n</sub><sup>2</sup>/(2M)+(Mω<sub>0</sub><sup>2</sup>/2)Σ<sub>n</sub>(x<sub>n</sub>-x<sub>n+1</sub>)<sup>2</sup>。",
            "周期边界条件 x<sub>n+N</sub>=x<sub>n</sub>。"
          ], [
            "动能项来自每个原子的运动。",
            "势能项只保留最近邻相对位移。",
            "周期边界让 Fourier 模成为天然基底。"
          ], "先写模型 Hamilton 量，这是声子量子化的起点。"),
          S("02 由运动方程得到色散", [
            "Hamilton 方程或 Newton 方程给 Mẍ<sub>n</sub>=Mω<sub>0</sub><sup>2</sup>(x<sub>n-1</sub>+x<sub>n+1</sub>-2x<sub>n</sub>)。",
            "取平面波解 x<sub>n</sub>=x̃e<sup>i(kna-ωt)</sup>。",
            "代入得 -ω<sup>2</sup>=ω<sub>0</sub><sup>2</sup>(e<sup>-ika</sup>+e<sup>ika</sup>-2)。",
            "所以 ω<sub>k</sub><sup>2</sup>=4ω<sub>0</sub><sup>2</sup>sin<sup>2</sup>(ka/2)。"
          ], [
            "格点平移对称性保证平面波可对角化运动方程。",
            "长波极限 ka 很小时，ω≈v<sub>s</sub>|k|。",
            "声子是这些简正模量子化后的激发。"
          ], "色散关系要从代入平面波得到。"),
          S("03 Fourier 变换到 q 空间", [
            "x<sub>n</sub>=(1/√N)Σ<sub>q</sub>x<sub>q</sub>e<sup>iqR<sub>n</sub></sup>。",
            "p<sub>n</sub>=(1/√N)Σ<sub>q</sub>p<sub>q</sub>e<sup>iqR<sub>n</sub></sup>。",
            "正交关系 (1/N)Σ<sub>n</sub>e<sup>i(q-q')R<sub>n</sub></sup>=δ<sub>q,q'</sub>。",
            "代入 H 后，不同 q 模式互不耦合。"
          ], [
            "这一步把实空间耦合振子变成 q 空间独立振子。",
            "正交关系负责消掉交叉项。",
            "资料里的长推导核心就是两项分别代入并使用 δ 函数。"
          ], "不要只说“作 Fourier 变换”，要写正交关系。"),
          S("04 q 空间 Hamilton 量", [
            "动能项变为 Σ<sub>q</sub>p<sub>q</sub>p<sub>-q</sub>/(2M)。",
            "位移差项给出 Σ<sub>q</sub>(Mω<sub>q</sub><sup>2</sup>/2)x<sub>q</sub>x<sub>-q</sub>。",
            "因此 H=Σ<sub>q</sub>[p<sub>q</sub>p<sub>-q</sub>/(2M)+(Mω<sub>q</sub><sup>2</sup>/2)x<sub>q</sub>x<sub>-q</sub>]。",
            "每个 q 模都是一个频率 ω<sub>q</sub> 的谐振子。"
          ], [
            "x<sub>q</sub><sup>†</sup>=x<sub>-q</sub>，p<sub>q</sub><sup>†</sup>=p<sub>-q</sub>，所以 Hamilton 量是 Hermitian。",
            "q 和 -q 成对出现是实位移场的结果。",
            "这一步完成经典简正模分解。"
          ], "写出 p<sub>q</sub>p<sub>-q</sub> 和 x<sub>q</sub>x<sub>-q</sub>。"),
          S("05 正则量子化与产生湮灭算符", [
            "把 x<sub>n</sub>、p<sub>n</sub> 提升为算符，满足 [x̂<sub>n</sub>,p̂<sub>m</sub>]=iℏδ<sub>nm</sub>。",
            "对应 q 空间有 [x̂<sub>q</sub>,p̂<sub>-q'</sub>]=iℏδ<sub>q,q'</sub>。",
            "定义 a<sub>q</sub>∝√(Mω<sub>q</sub>/ℏ)x̂<sub>q</sub>+i p̂<sub>-q</sub>/√(Mℏω<sub>q</sub>)。",
            "可得 [a<sub>q</sub>,a<sub>q'</sub><sup>†</sup>]=δ<sub>q,q'</sub>。"
          ], [
            "产生湮灭算符就是谐振子的标准量子化变量。",
            "对易关系保证声子是玻色型激发。",
            "资料中无量纲化 x 和 p 的目的就是得到标准谐振子形式。"
          ], "至少写出正则对易和 a、a<sup>†</sup> 的对易。"),
          S("06 声子 Hamilton 量", [
            "代回 q 空间 Hamilton 量。",
            "每个模式化为 H<sub>q</sub>=ℏω<sub>q</sub>(a<sub>q</sub><sup>†</sup>a<sub>q</sub>+1/2)。",
            "总 Hamilton 量 H=Σ<sub>q</sub>ℏω<sub>q</sub>(n<sub>q</sub>+1/2)。",
            "三维晶体还要对支 λ 求和：H=Σ<sub>q,λ</sub>ℏω<sub>qλ</sub>(n<sub>qλ</sub>+1/2)。"
          ], [
            "n<sub>q</sub>=a<sub>q</sub><sup>†</sup>a<sub>q</sub> 是第 q 模声子数。",
            "声子数不守恒，所以热平衡中声子化学势为 0。",
            "零点能 1/2 通常不贡献热容，因为与温度无关。"
          ], "声子就是正常振动模式的一份能量 ℏω。"),
          S("07 Debye 声子态密度", [
            "低频声学支近似线性色散：ω=v<sub>s</sub>q。",
            "三维 q 空间态数 dN=g<sub>s</sub>V4πq<sup>2</sup>dq/(2π)<sup>3</sup>。",
            "用 q=ω/v<sub>s</sub>，dq=dω/v<sub>s</sub>。",
            "得到 g(ω)=g<sub>s</sub>Vω<sup>2</sup>/(2π<sup>2</sup>v<sub>s</sub><sup>3</sup>)。"
          ], [
            "三维低频声子 DOS 正比于 ω<sup>2</sup>。",
            "若取三个声学支，可把 g<sub>s</sub> 视为 3，或分别用不同声速求和。",
            "Debye 模型用线性色散替代真实声子谱。"
          ], "DOS 推导要从 q 空间球壳开始。"),
          S("08 Debye 截止频率", [
            "真实晶体总振动自由度为 3N。",
            "Debye 模型用截止频率 ω<sub>D</sub> 保证总模式数正确。",
            "要求 ∫<sub>0</sub><sup>ω<sub>D</sub></sup>g(ω)dω=3N。",
            "若采用平均声速，得 ω<sub>D</sub>=v<sub>s</sub>(6π<sup>2</sup>N/V)<sup>1/3</sup>。"
          ], [
            "ω<sub>D</sub> 不是随意上限，而是由总模数确定。",
            "它相当于用等体积 Debye 球替代真实第一布里渊区。",
            "Debye 温度定义 Θ<sub>D</sub>=ℏω<sub>D</sub>/k<sub>B</sub>。"
          ], "必须写 ∫g(ω)dω=3N。"),
          S("09 Debye 内能积分", [
            "单个声子模式平均热激发能量为 ℏω/[e<sup>βℏω</sup>-1]。",
            "总热内能 U=∫<sub>0</sub><sup>ω<sub>D</sub></sup>dω g(ω) ℏω/[e<sup>βℏω</sup>-1]。",
            "令 x=βℏω，dω=(k<sub>B</sub>T/ℏ)dx。",
            "U=常数 × (k<sub>B</sub>T)<sup>4</sup>∫<sub>0</sub><sup>Θ<sub>D</sub>/T</sup>x<sup>3</sup>/(e<sup>x</sup>-1)dx。"
          ], [
            "变量替换后 T 的幂次清楚出现。",
            "零点能不写进热内能，因其对 C<sub>V</sub> 无贡献。",
            "这条积分是 Debye 热容的核心公式。"
          ], "从平均占据数到 U 的积分要完整。"),
          S("10 低温 T<sup>3</sup> 定律", [
            "T≪Θ<sub>D</sub> 时，上限 Θ<sub>D</sub>/T 很大，可近似为 ∞。",
            "积分 ∫<sub>0</sub><sup>∞</sup>x<sup>3</sup>/(e<sup>x</sup>-1)dx=π<sup>4</sup>/15。",
            "因此 U∝T<sup>4</sup>。",
            "热容 C<sub>V</sub>=(∂U/∂T)<sub>V</sub>∝T<sup>3</sup>。"
          ], [
            "低温只有长波低频声子被激发。",
            "三维可激发模式数随 q<sup>3</sup> 增长，所以热容出现 T<sup>3</sup>。",
            "这就是金属低温热容中 βT<sup>3</sup> 项。"
          ], "低温极限写上限变 ∞ 和标准积分。"),
          S("11 高温 Dulong-Petit 极限", [
            "T≫Θ<sub>D</sub> 时，上限 Θ<sub>D</sub>/T 很小。",
            "e<sup>x</sup>-1≈x。",
            "积分中 x<sup>3</sup>/(e<sup>x</sup>-1)≈x<sup>2</sup>。",
            "最终每个振动自由度给 k<sub>B</sub>，所以 C<sub>V</sub>→3Nk<sub>B</sub>。"
          ], [
            "高温时量子振动恢复经典能量均分。",
            "Debye 模型在高温给出 Dulong-Petit 定律。",
            "低温和高温的差别来自激发模式数量不同。"
          ], "高温极限必须说明 e<sup>x</sup>-1≈x。")
        ]),

        T("emfield", "电磁场/黑体/相干态", "考试要求 10-12", "Maxwell 方程、库伦规范、微元法量子化、电磁场谐振子、黑体辐射与相干态完整链条", "H=Σ<sub>k,λ</sub>ℏω<sub>k</sub>(a<sup>†</sup>a+1/2)", [
          S("01 单位制先说清：为什么有时写 c、有时写 ε₀、μ₀", [
              "在 SI 制中：u = (1/2)[ε<sub>0</sub>E<sup>2</sup> + B<sup>2</sup>/μ<sub>0</sub>]，H = ∫u d<sup>3</sup>r。",
              "在高斯制中：u = (E<sup>2</sup> + B<sup>2</sup>)/(8π)，H = (1/8π)∫(E<sup>2</sup>+B<sup>2</sup>)d<sup>3</sup>r。",
              "SI 制真空光速：c<sup>2</sup> = 1/(ε<sub>0</sub>μ<sub>0</sub>)。",
              "高斯制 Lorentz 力：F = q[E + (v/c)×B]，所以 E 和 B 量纲相同。"
            ], [
              "你的笔记里有时出现 1/c，有时出现 ε<sub>0</sub>、μ<sub>0</sub>，不是物理变了，是单位制换了。",
              "后面为了和量子光学常见写法一致，主推导用 SI 制；若老师板书用高斯制，只要把系数换掉，结构完全相同。",
              "考试时先声明单位制，别让系数问题把真正的推导淹死。"
            ], "先说明单位制；重点不是系数，而是 H 最终化成谐振子。"),
          S("02 无源真空 Maxwell 方程", [
              "无源真空：ρ = 0，J = 0。",
              "∇·E = 0。",
              "∇·B = 0。",
              "∇×E = -∂B/∂t。",
              "∇×B = μ<sub>0</sub>ε<sub>0</sub>∂E/∂t = (1/c<sup>2</sup>)∂E/∂t。"
            ], [
              "散度方程说有没有源头：真空里没有电荷，所以 E 没有源；磁单极没有，所以 B 也没有源。",
              "旋度方程说互相生成：变化的 B 产生旋转的 E，变化的 E 产生旋转的 B。",
              "电磁波能够自己传播，就是因为后两条方程互相喂养，够离谱，但宇宙就这么干。"
            ], "真空 Maxwell 方程要完整写四条，后面所有推导从这里出发。"),
          S("03 由 ∇·B = 0 引入矢势 A", [
              "数学恒等式：∇·(∇×A) = 0。",
              "Maxwell 方程给出：∇·B = 0。",
              "因此可以把磁场写成：B = ∇×A。",
              "积分形式：∫<sub>S</sub>B·dS = ∫<sub>S</sub>(∇×A)·dS = ∮<sub>∂S</sub>A·dl。"
            ], [
              "任意旋度场都无散度；既然 B 无散度，就可以用某个矢量场 A 的旋度表示它。",
              "积分形式来自 Stokes 定理：A 沿闭合边界绕一圈的环流，等于穿过该边界围成面的磁通量。",
              "A 不是直接可见的磁场，但它是后面写 Hamiltonian 和量子化的核心变量。"
            ], "记住 B=∇×A，以及 ∮A·dl = 磁通量。"),
          S("04 由 Faraday 方程推出 E 与 A、φ 的关系", [
              "Faraday 方程：∇×E = -∂B/∂t。",
              "代入 B = ∇×A：∇×E = -∂(∇×A)/∂t。",
              "时间导数与空间旋度可交换：∂(∇×A)/∂t = ∇×(∂A/∂t)。",
              "所以：∇×E = ∇×(-∂A/∂t)。",
              "移到一边：∇×[E + ∂A/∂t] = 0。",
              "若某个矢量场旋度为零，则可写成标势梯度：E + ∂A/∂t = -∇φ。",
              "最终：E = -∂A/∂t - ∇φ。"
            ], [
              "这一步别跳。先代入 B=∇×A，再把时间导数拉进旋度，最后才得到旋度为零。",
              "φ 是标势，∇φ 表示纵向电场部分；自由辐射场里后面会把它消掉。",
              "如果用高斯制，公式变成 E = -(1/c)∂A/∂t - ∇φ，本质一样。"
            ], "先写 B=∇×A，再从 Faraday 方程推出 E=-∂A/∂t-∇φ。"),
          S("05 A 的规范自由度：为什么还要选库伦规范", [
              "做变换：A′ = A + ∇χ。",
              "对应磁场：B′ = ∇×A′ = ∇×A + ∇×∇χ。",
              "因为 ∇×∇χ = 0，所以 B′ = B。",
              "若同时令 φ′ = φ - ∂χ/∂t，则 E′ = -∂A′/∂t - ∇φ′ = E。"
            ], [
              "A 和 φ 不是唯一的，同一个真实 E、B 可以由许多 A、φ 表示。",
              "这不是物理多了一堆新自由度，而是描述方式有冗余。",
              "为了量子化，必须先选一个规范，不然会把非物理自由度也拿去量子化，堪称自找麻烦。"
            ], "规范变换不改变 E、B；所以要选规范去掉冗余。"),
          S("06 库伦规范：∇·A = 0，并在无源场中取 φ = 0", [
              "库伦规范条件：∇·A = 0。",
              "无源 Maxwell 方程：∇·E = 0。",
              "代入 E = -∂A/∂t - ∇φ：∇·E = -∂(∇·A)/∂t - ∇<sup>2</sup>φ = 0。",
              "由 ∇·A = 0 得：∇<sup>2</sup>φ = 0。",
              "对自由辐射场，通常取无边界静电势：φ = 0。",
              "于是：E = -∂A/∂t，B = ∇×A，∇·A = 0。"
            ], [
              "库伦规范的物理作用是只保留横向场。",
              "自由电磁波没有电荷源，纵向静电势不参与辐射场量子化，所以可取 φ=0。",
              "最后这三条关系就是你笔记里后续推导的钥匙。"
            ], "库伦规范下必须记：E=-∂A/∂t，B=∇×A，∇·A=0。"),
          S("07 从 Maxwell 方程推出 A 的波动方程", [
              "使用 Maxwell：∇×B = (1/c<sup>2</sup>)∂E/∂t。",
              "代入 B=∇×A，E=-∂A/∂t。",
              "左边：∇×B = ∇×(∇×A)。",
              "矢量恒等式：∇×(∇×A)=∇(∇·A)-∇<sup>2</sup>A。",
              "库伦规范 ∇·A=0，所以左边 = -∇<sup>2</sup>A。",
              "右边：(1/c<sup>2</sup>)∂E/∂t = -(1/c<sup>2</sup>)∂<sup>2</sup>A/∂t<sup>2</sup>。",
              "因此：-∇<sup>2</sup>A = -(1/c<sup>2</sup>)∂<sup>2</sup>A/∂t<sup>2</sup>。",
              "最终：∇<sup>2</sup>A - (1/c<sup>2</sup>)∂<sup>2</sup>A/∂t<sup>2</sup> = 0。"
            ], [
              "这说明 A 本身满足波动方程，传播速度为 c。",
              "从这一刻开始，A 就可以像格波位移一样分解成一堆正常模式。",
              "如果不选库伦规范，∇(∇·A) 这一项不会消失，推导会被规范冗余拖进泥坑。"
            ], "完整写出矢量恒等式，再用 ∇·A=0 消掉第一项。"),
          S("08 平面波解和色散关系 ω = ck", [
              "设 A(r,t)=A<sub>k</sub>e<sup>i(k·r-ωt)</sup>。",
              "空间 Laplace：∇<sup>2</sup>A = -k<sup>2</sup>A。",
              "时间二阶导：∂<sup>2</sup>A/∂t<sup>2</sup> = -ω<sup>2</sup>A。",
              "代入波动方程：-k<sup>2</sup>A + (ω<sup>2</sup>/c<sup>2</sup>)A = 0。",
              "非零解要求：ω<sup>2</sup> = c<sup>2</sup>k<sup>2</sup>。",
              "所以：ω = c|k|。"
            ], [
              "色散关系告诉你每个 k 模式的频率。",
              "电磁波在真空中线性色散，和长波声学声子 ω=v<sub>s</sub>k 很像，只不过速度从声速变成光速。",
              "这就是老师说电磁场量子化可以借用格波量子化的原因之一。"
            ], "必须写出代入平面波后得到 ω=ck。"),
          S("09 横向条件与两个偏振", [
              "库伦规范：∇·A=0。",
              "对平面波 A=A<sub>k</sub>e<sup>i(k·r-ωt)</sup>，有 ∇·A = i k·A<sub>k</sub>e<sup>i(k·r-ωt)</sup>。",
              "因此：k·A<sub>k</sub> = 0。",
              "所以 A<sub>k</sub> 必须垂直于传播方向 k。",
              "对每个 k，垂直平面中有两个独立偏振 e<sub>k1</sub>、e<sub>k2</sub>。",
              "正交归一：e<sub>kλ</sub>·e<sub>kλ′</sub>=δ<sub>λλ′</sub>，且 k·e<sub>kλ</sub>=0。"
            ], [
              "光子不是 3 个偏振，而是 2 个横向偏振。纵向自由度被库伦规范和无源条件去掉。",
              "偏振 λ 是光子态标签的一部分；同一个光子模式要 k 和 λ 都相同。",
              "这一步解释了黑体 DOS 中为什么有因子 2。"
            ], "光子态标签是 (k,λ)，其中 λ=1,2。"),
          S("10 为了让 A 是实场，必须同时写 k 和 -k", [
              "真实电磁场要求 A(r,t) 为实函数。",
              "单个复指数 e<sup>i(k·r-ωt)</sup> 本身是复数。",
              "因此要把共轭项一起加上：A(r,t) ∼ A<sub>k</sub>e<sup>i(k·r-ωt)</sup> + A<sub>k</sub><sup>*</sup>e<sup>-i(k·r-ωt)</sup>。",
              "等价地可以写成实部：A(r,t)=Re[A<sub>k</sub>e<sup>i(k·r-ωt)</sup>]。",
              "Fourier 系数满足现实条件：A<sub>-k</sub>=A<sub>k</sub><sup>*</sup>。"
            ], [
              "你笔记里反复写 A<sub>k</sub> 和 A<sub>k</sub><sup>*</sup>，就是为了保证场是实的。",
              "复指数只是数学工具，真正的物理场必须是实场。",
              "后面量子化后，a 和 a<sup>†</sup> 也会成对出现，理由类似。"
            ], "看到 + 共轭项，不要慌，它是在保证 A(r,t) 为实数。"),
          S("11 电磁场 Hamiltonian：把 E、B 换成 A", [
              "场能量密度：u = (1/2)[ε<sub>0</sub>E<sup>2</sup> + B<sup>2</sup>/μ<sub>0</sub>]。",
              "总 Hamiltonian：H = (1/2)∫d<sup>3</sup>r[ε<sub>0</sub>E<sup>2</sup> + B<sup>2</sup>/μ<sub>0</sub>]。",
              "库伦规范自由场：E=-∂A/∂t，B=∇×A。",
              "代入：H = (1/2)∫d<sup>3</sup>r[ε<sub>0</sub>(∂A/∂t)<sup>2</sup> + (∇×A)<sup>2</sup>/μ<sub>0</sub>]。"
            ], [
              "第一项是时间变化平方，像动能。",
              "第二项是空间变化平方，像弹簧势能。",
              "这就是 A 和格波位移 x 相似的真正原因，不是因为真空里有小弹簧。"
            ], "从 H=∫u d<sup>3</sup>r 出发，代入 E=-∂A/∂t、B=∇×A。"),
          S("12 微元法：把连续空间切成一维小格子", [
              "取一个最简单的单偏振波：波沿 x 方向传播，A 只有 y 分量。",
              "写作：A(r,t)=A<sub>y</sub>(x,t)e<sub>y</sub>。",
              "于是：E<sub>y</sub>=-∂A<sub>y</sub>/∂t。",
              "磁场：B=∇×A，只有 B<sub>z</sub>=∂A<sub>y</sub>/∂x。",
              "把 x 方向分成格距 a 的小格子，x<sub>n</sub>=na。",
              "定义 A<sub>n</sub>(t)=A<sub>y</sub>(x<sub>n</sub>,t)。"
            ], [
              "这一步只是为了看清结构，真实电磁场还有另一个偏振和三维 k。",
              "A<sub>n</sub> 是第 n 个空间微元上的矢势值，扮演原子链位移 x<sub>n</sub> 的角色。",
              "老师说“电磁场跟格波一样”，讲的就是从这里开始的结构相同。"
            ], "选单偏振、单传播方向，把 A(r,t) 变成格点变量 A<sub>n</sub>(t)。"),
          S("13 离散后：E 像速度，B 像相邻格点差分", [
              "时间导数：E<sub>n</sub> = -dA<sub>n</sub>/dt = -Ȧ<sub>n</sub>。",
              "空间导数近似为差分：∂A<sub>y</sub>/∂x ≈ (A<sub>n</sub>-A<sub>n-1</sub>)/a。",
              "所以：B<sub>n</sub> ≈ (A<sub>n</sub>-A<sub>n-1</sub>)/a。",
              "微元体积：V<sub>cell</sub>=a·S，其中 S 是横截面积。"
            ], [
              "E 由 A 的时间变化给出，所以 E<sup>2</sup> 项像速度平方。",
              "B 由 A 的空间变化给出，所以 B<sup>2</sup> 项像相邻格点位移差平方。",
              "这一步就是电磁场 Hamiltonian 变成一维弹簧链 Hamiltonian 的物理桥梁。"
            ], "核心对应：A<sub>n</sub>↔x<sub>n</sub>，E<sub>n</sub>↔-ẋ<sub>n</sub>，B<sub>n</sub>↔(x<sub>n</sub>-x<sub>n-1</sub>)/a。"),
          S("14 写成一维原子链形式", [
              "离散能量：H ≈ Σ<sub>n</sub>V<sub>cell</sub>{(1/2)ε<sub>0</sub>Ȧ<sub>n</sub><sup>2</sup> + (1/2μ<sub>0</sub>a<sup>2</sup>)(A<sub>n</sub>-A<sub>n-1</sub>)<sup>2</sup>}。",
              "把它和原子链 H = Σ<sub>n</sub>[(1/2)Mẋ<sub>n</sub><sup>2</sup> + (1/2)K(x<sub>n</sub>-x<sub>n-1</sub>)<sup>2</sup>] 对比。",
              "对应关系：x<sub>n</sub> ↔ A<sub>n</sub>。",
              "等效质量：M = V<sub>cell</sub>ε<sub>0</sub>。",
              "等效弹簧常数：K = V<sub>cell</sub>/(μ<sub>0</sub>a<sup>2</sup>)。"
            ], [
              "这不是说 A 真有机械质量，而是数学形式等价。",
              "只要 Hamiltonian 形式一样，后面的正常模分解和量子化方法就一样。",
              "人类物理学最喜欢的操作：发现同一个数学结构，然后把旧解法搬过去。偶尔还挺有用。"
            ], "必须写出 M=V<sub>cell</sub>ε<sub>0</sub> 和 K=V<sub>cell</sub>/(μ<sub>0</sub>a<sup>2</sup>) 的对应。"),
          S("15 离散电磁链的色散关系", [
              "原子链色散：ω<sub>k</sub>=2√(K/M)|sin(ka/2)|。",
              "代入 K/M = [V<sub>cell</sub>/(μ<sub>0</sub>a<sup>2</sup>)]/[V<sub>cell</sub>ε<sub>0</sub>] = 1/(μ<sub>0</sub>ε<sub>0</sub>a<sup>2</sup>) = c<sup>2</sup>/a<sup>2</sup>。",
              "所以：ω<sub>k</sub> = (2c/a)|sin(ka/2)|。",
              "连续极限 a→0，sin(ka/2)≈ka/2。",
              "于是：ω<sub>k</sub>≈ck。"
            ], [
              "离散微元模型只是辅助工具，最终要取连续极限。",
              "在长波极限下，离散色散回到真正电磁波色散 ω=ck。",
              "这一步把“像格波”推回了真实电磁波。"
            ], "连续极限下必须得到 ω=ck，否则前面类比就没闭环。"),
          S("16 Fourier 变换：把 Aₙ 变成正常模 Aₖ", [
              "离散 Fourier 变换：A<sub>n</sub> = (1/√N)Σ<sub>k</sub>A<sub>k</sub>e<sup>ikna</sup>。",
              "反变换：A<sub>k</sub> = (1/√N)Σ<sub>n</sub>A<sub>n</sub>e<sup>-ikna</sup>。",
              "正交关系：Σ<sub>n</sub>e<sup>i(k-k′)na</sup> = Nδ<sub>kk′</sub>。",
              "1/√N 的作用：保证变换前后归一化对称，Σ<sub>n</sub>|A<sub>n</sub>|<sup>2</sup>=Σ<sub>k</sub>|A<sub>k</sub>|<sup>2</sup>。"
            ], [
              "A<sub>n</sub> 是实空间每个微元上的场值，A<sub>k</sub> 是第 k 个波模式的振幅。",
              "1/√N 不是神秘物理常数，只是为了让正变换和反变换各承担一半归一化。",
              "Fourier 变换的作用是把相邻耦合的 A<sub>n</sub> 解耦成互不耦合的 k 模式。"
            ], "1/√N 来自离散 Fourier 正交归一，不是随手写的。"),
          S("17 Fourier 后 Hamiltonian 对角化", [
              "离散链 Hamiltonian：H=Σ<sub>n</sub>[(1/2)MȦ<sub>n</sub><sup>2</sup>+(1/2)K(A<sub>n</sub>-A<sub>n-1</sub>)<sup>2</sup>]。",
              "代入 A<sub>n</sub>=(1/√N)Σ<sub>k</sub>A<sub>k</sub>e<sup>ikna</sup>。",
              "动能项由正交关系变成：Σ<sub>k</sub>(1/2)MȦ<sub>k</sub>Ȧ<sub>-k</sub>。",
              "差分项给出因子 |1-e<sup>-ika</sup>|<sup>2</sup>=4sin<sup>2</sup>(ka/2)。",
              "因此势能项变成：Σ<sub>k</sub>(1/2)Mω<sub>k</sub><sup>2</sup>A<sub>k</sub>A<sub>-k</sub>。",
              "最终：H=Σ<sub>k</sub>[(1/2)MȦ<sub>k</sub>Ȧ<sub>-k</sub>+(1/2)Mω<sub>k</sub><sup>2</sup>A<sub>k</sub>A<sub>-k</sub>]。"
            ], [
              "这是正常模分解的核心：原来相邻格点之间耦合，变换后每个 k 独立。",
              "每个 k 模式都是一个谐振子，频率就是 ω<sub>k</sub>。",
              "声子、电磁场、很多场论推导，都是这同一招，宇宙懒得换剧本。"
            ], "要写出差分项给 4sin²(ka/2)，这说明你不是只背结果。"),
          S("18 定义正则坐标和正则动量", [
              "对每个正常模，广义坐标可记为 Q<sub>k</sub>，广义动量 P<sub>k</sub>。",
              "典型形式：H<sub>k</sub> = P<sub>k</sub>P<sub>-k</sub>/(2M) + (1/2)Mω<sub>k</sub><sup>2</sup>Q<sub>k</sub>Q<sub>-k</sub>。",
              "正则量子化要求：[Q̂<sub>k</sub>, P̂<sub>k′</sub>] = iℏδ<sub>k,-k′</sub>。",
              "若用实模式坐标，也可写成：[Q̂<sub>k</sub>, P̂<sub>k′</sub>] = iℏδ<sub>kk′</sub>。"
            ], [
              "复 Fourier 模式里 A<sub>-k</sub>=A<sub>k</sub><sup>*</sup>，所以常出现 k 与 -k 配对。",
              "这就是笔记里 Q<sub>k</sub>Q<sub>-k</sub>、P<sub>k</sub>P<sub>-k</sub> 这些符号的来源。",
              "本质上仍然是一堆普通谐振子，不是新物种。"
            ], "要清楚复模式与 -k 配对，别把 A<sub>k</sub> 和 A<sub>-k</sub> 当成完全独立。"),
          S("19 用产生湮灭算符表示每个谐振子", [
              "单个谐振子标准定义：a = (1/√2)[√(Mω/ℏ) Q + i P/√(Mℏω)]。",
              "a<sup>†</sup> = (1/√2)[√(Mω/ℏ) Q - i P/√(Mℏω)]。",
              "反解：Q = √(ℏ/(2Mω))(a+a<sup>†</sup>)。",
              "反解：P = -i√(Mℏω/2)(a-a<sup>†</sup>)。",
              "对电磁模式，就是把 Q、P 替换为对应的 A<sub>k</sub> 和共轭动量。"
            ], [
              "这样定义的目的，是让 Hamiltonian 自动变成 ℏω(a<sup>†</sup>a+1/2)。",
              "a 降低一个能量量子，a<sup>†</sup> 增加一个能量量子。",
              "不要把 a 想成一个小球，它是操作量子态的算符。"
            ], "产生湮灭算符的形式来自谐振子标准归一化。"),
          S("20 量子化后的电磁场 Hamiltonian", [
              "每个模式量子化后：H<sub>kλ</sub>=ℏω<sub>k</sub>(a<sub>kλ</sub><sup>†</sup>a<sub>kλ</sub>+1/2)。",
              "总 Hamiltonian：H=Σ<sub>k,λ</sub>ℏω<sub>k</sub>(a<sub>kλ</sub><sup>†</sup>a<sub>kλ</sub>+1/2)。",
              "定义光子数算符：N̂<sub>kλ</sub>=a<sub>kλ</sub><sup>†</sup>a<sub>kλ</sub>。",
              "数态满足：N̂<sub>kλ</sub>|n<sub>kλ</sub>⟩ = n<sub>kλ</sub>|n<sub>kλ</sub>⟩。",
              "该模式能量：E<sub>n</sub>=(n+1/2)ℏω<sub>k</sub>。"
            ], [
              "光子不是先假设出来的小颗粒，而是电磁场正常模量子化后的能级激发。",
              "同一个模式被激发 n 份，就是这个模式里有 n 个光子。",
              "1/2ℏω 是零点能；黑体热辐射通常只关心热激发部分 nℏω。"
            ], "最终结论必须写 H=Σℏω(a<sup>†</sup>a+1/2)。"),
          S("21 连续极限下的 Â(r) 场算符", [
              "连续化后，把离散求和推广为所有 k 和两个偏振求和。",
              "矢势算符常写为：Â(r,t)=Σ<sub>k,λ</sub>√[ℏ/(2ε<sub>0</sub>Vω<sub>k</sub>)] e<sub>kλ</sub>[a<sub>kλ</sub>e<sup>i(k·r-ωt)</sup> + a<sub>kλ</sub><sup>†</sup>e<sup>-i(k·r-ωt)</sup>]。",
              "其中 V 是量子化体积，e<sub>kλ</sub> 是横向偏振矢量。",
              "系数 √[ℏ/(2ε<sub>0</sub>Vω<sub>k</sub>)] 来自谐振子坐标 Q=√(ℏ/2Mω)(a+a<sup>†</sup>) 的连续场归一化。"
            ], [
              "这个式子就是电磁场版的位移算符展开。",
              "a 项对应湮灭一个光子，a<sup>†</sup> 项对应产生一个光子。",
              "二者同时出现，是为了保证 Â 是厄米算符，也就是可观测实场。"
            ], "场算符必须含 a 和 a<sup>†</sup> 两项。"),
          S("22 Ê 与 B̂ 的场算符", [
              "由 E=-∂A/∂t，得到：Ê(r,t)=iΣ<sub>k,λ</sub>√[ℏω<sub>k</sub>/(2ε<sub>0</sub>V)] e<sub>kλ</sub>[a<sub>kλ</sub>e<sup>i(k·r-ωt)</sup> - a<sub>kλ</sub><sup>†</sup>e<sup>-i(k·r-ωt)</sup>]。",
              "由 B=∇×A，得到：B̂(r,t)=iΣ<sub>k,λ</sub>√[ℏ/(2ε<sub>0</sub>Vω<sub>k</sub>)](k×e<sub>kλ</sub>)[a<sub>kλ</sub>e<sup>i(k·r-ωt)</sup> - a<sub>kλ</sub><sup>†</sup>e<sup>-i(k·r-ωt)</sup>]。",
              "也可写成 B 的方向由 e<sub>B</sub> = e<sub>k</sub>×e<sub>E</sub> 决定。",
              "E、B、k 三者相互垂直。"
            ], [
              "E 的系数比 A 多一个 ω，因为时间导数会带出 -iω。",
              "B 的方向由 k×e 决定，所以磁场方向同时垂直于传播方向和电场偏振方向。",
              "这正对应经典电磁波的横波图像。"
            ], "从 Â 出发，用 E=-∂A/∂t、B=∇×A 得到 Ê、B̂。"),
          S("23 光子态密度：从 k 空间数模式", [
              "周期边界条件下，一个 k 态在 k 空间占体积 (2π/L)<sup>3</sup>。",
              "所以 k 空间态密度为 V/(2π)<sup>3</sup>。",
              "半径 k 到 k+dk 的球壳体积为 4πk<sup>2</sup>dk。",
              "每个 k 有两个偏振，所以模式数：dN = 2·[V/(2π)<sup>3</sup>]·4πk<sup>2</sup>dk。",
              "化简：dN = V k<sup>2</sup>dk/π<sup>2</sup>。"
            ], [
              "这一步和声子 DOS 很像，只是光子有两个偏振，而三维声学声子常有三支。",
              "两个偏振因子一定要写进去，否则 Planck 公式系数会少一半。",
              "DOS 的本质就是数 k 空间壳层里有多少模式。"
            ], "光子 g<sub>s</sub>=2，不是 3。"),
          S("24 从 k 态密度换到频率态密度", [
              "真空光子色散：ω=ck。",
              "所以 k=ω/c，dk=dω/c。",
              "代入 dN = V k<sup>2</sup>dk/π<sup>2</sup>。",
              "得到：g(ω)dω = dN = Vω<sup>2</sup>dω/(π<sup>2</sup>c<sup>3</sup>)。",
              "因此单位体积频率态密度：g(ω)/V = ω<sup>2</sup>/(π<sup>2</sup>c<sup>3</sup>)。"
            ], [
              "g(ω)dω 表示频率在 ω 到 ω+dω 之间有多少个电磁模式。",
              "它不是能量，只是模式数量。",
              "后面要再乘单个光子能量 ℏω 和平均光子数。"
            ], "黑体推导的三件套：DOS × ℏω × 平均占据数。"),
          S("25 光子为什么玻色分布中 μ = 0", [
              "一般玻色平均占据：n̄(ω)=1/[e<sup>β(ℏω-μ)</sup>-1]。",
              "化学势 μ 的作用是控制守恒的粒子数。",
              "黑体腔中热壁可以吸收光子，也可以放出光子。",
              "所以光子总数不守恒。",
              "因此平衡光子气的化学势：μ<sub>γ</sub>=0。",
              "于是：n̄(ω)=1/[e<sup>βℏω</sup>-1]。"
            ], [
              "这和声子热容里的声子分布完全同理：声子数也不守恒，所以声子 μ=0。",
              "不是没用玻色分布，而是用了 μ=0 的玻色分布。",
              "别把光子当成固定粒子数的理想玻色气体，否则会硬塞一个不该有的 μ。"
            ], "黑体辐射一定写 μ<sub>γ</sub>=0。"),
          S("26 Planck 谱能量密度", [
              "频率在 ω 到 ω+dω 内的单位体积能量为：u(ω)dω = [单位体积模式数] × [每个光子能量] × [平均光子数]。",
              "单位体积模式数：ω<sup>2</sup>dω/(π<sup>2</sup>c<sup>3</sup>)。",
              "每个光子能量：ℏω。",
              "平均光子数：1/[e<sup>βℏω</sup>-1]。",
              "所以：u(ω)dω = [ℏω<sup>3</sup>/(π<sup>2</sup>c<sup>3</sup>)]·dω/[e<sup>βℏω</sup>-1]。",
              "即：u(ω)=ℏω<sup>3</sup>/(π<sup>2</sup>c<sup>3</sup>[e<sup>ℏω/(k<sub>B</sub>T)</sup>-1])。"
            ], [
              "谱能量密度不是单个光子的能量，而是某个频率段内所有模式、所有光子的能量密度。",
              "低频模式单个光子能量小但占据多；高频单个能量大但占据少。",
              "Planck 分布就是这三个因素竞争后的结果。"
            ], "写出 u(ω)dω 的完整结构。"),
          S("27 用普通频率 ν 写 Planck 公式", [
              "角频率和普通频率关系：ω=2πν。",
              "能量守恒换元：u(ω)dω = u(ν)dν。",
              "dω = 2πdν。",
              "由角频率公式换元后得到：u(ν)=8πhν<sup>3</sup>/[c<sup>3</sup>(e<sup>hν/(k<sub>B</sub>T)</sup>-1)]。"
            ], [
              "ω 版和 ν 版不要混用。",
              "如果积分变量换了，谱密度函数本身也要跟着变，因为 u(ω)dω 才是真正物理量。",
              "这就是很多同学系数差 2π 的灾难现场。"
            ], "记住 u(ω)dω = u(ν)dν。"),
          S("28 黑体总能量密度与 T⁴ 定律", [
              "总能量密度：u(T)=∫<sub>0</sub><sup>∞</sup>u(ω)dω。",
              "代入：u(T)=∫<sub>0</sub><sup>∞</sup>[ℏω<sup>3</sup>/(π<sup>2</sup>c<sup>3</sup>)] dω/[e<sup>ℏω/(k<sub>B</sub>T)</sup>-1]。",
              "令 x=ℏω/(k<sub>B</sub>T)，则 ω=(k<sub>B</sub>T/ℏ)x，dω=(k<sub>B</sub>T/ℏ)dx。",
              "于是：u(T)=(k<sub>B</sub>T)<sup>4</sup>/(π<sup>2</sup>c<sup>3</sup>ℏ<sup>3</sup>)∫<sub>0</sub><sup>∞</sup>x<sup>3</sup>dx/(e<sup>x</sup>-1)。",
              "标准积分：∫<sub>0</sub><sup>∞</sup>x<sup>3</sup>dx/(e<sup>x</sup>-1)=π<sup>4</sup>/15。",
              "所以：u(T)=π<sup>2</sup>k<sub>B</sub><sup>4</sup>T<sup>4</sup>/(15ℏ<sup>3</sup>c<sup>3</sup>)。"
            ], [
              "T<sup>4</sup> 来自 ω<sup>3</sup>dω 的换元：每个 ω 都带一个 T。",
              "这就是 Stefan-Boltzmann 定律的能量密度版本。",
              "宇宙学里辐射能量密度 ρ<sub>γ</sub>∝T<sup>4</sup> 就来自这里。"
            ], "变量替换要完整写，别只报 T⁴。"),
          S("29 Number state：固定光子数态", [
              "数态定义：|n⟩ = (a<sup>†</sup>)<sup>n</sup>|0⟩/√(n!)。",
              "光子数算符：N̂=a<sup>†</sup>a。",
              "本征方程：N̂|n⟩ = n|n⟩。",
              "湮灭算符作用：a|n⟩ = √n |n-1⟩。",
              "产生算符作用：a<sup>†</sup>|n⟩ = √(n+1)|n+1⟩。"
            ], [
              "|n⟩ 表示同一个模式里正好有 n 个光子。",
              "这类态光子数非常确定，但相位高度不确定。",
              "这就是它不像经典电磁波的原因：经典波需要稳定相位。"
            ], "number state 是光子数确定态，不是经典波。"),
          S("30 数态中的平均电场为什么为零", [
              "单模电场可写作：Ê(r,t)=iE<sub>0</sub>[ae<sup>iθ</sup>-a<sup>†</sup>e<sup>-iθ</sup>]，其中 θ=k·r-ωt。",
              "在数态中：⟨n|a|n⟩=√n⟨n|n-1⟩=0。",
              "同理：⟨n|a<sup>†</sup>|n⟩=√(n+1)⟨n|n+1⟩=0。",
              "所以：⟨n|Ê(r,t)|n⟩=0。"
            ], [
              "数态不是没有能量，它有 nℏω 的能量。",
              "但它没有确定相位，所以平均场振幅为零。",
              "这回答了笔记里“number state 和经典波为什么不同”的核心疑问。"
            ], "光子数确定不等于经典场确定。"),
          S("31 相干态定义：湮灭算符的本征态", [
              "相干态定义：a|α⟩ = α|α⟩。",
              "α 是复数，可写为 α=Ae<sup>iθ</sup>。",
              "A 控制平均光子数，θ 控制相位。",
              "相干态不是 N̂ 的本征态，而是 a 的本征态。"
            ], [
              "a 是降光子数的算符；它作用在相干态上，只是乘出一个复数 α。",
              "这让电场平均值能像经典正弦波一样振荡。",
              "经典电磁波的量子图像不是 |n⟩，而更接近 |α⟩。"
            ], "相干态定义必须先写 a|α⟩=α|α⟩。"),
          S("32 从 a|α⟩=α|α⟩ 推出相干态展开式", [
              "设 |α⟩=Σ<sub>n=0</sub><sup>∞</sup>C<sub>n</sub>|n⟩。",
              "左边：a|α⟩=Σ<sub>n=1</sub><sup>∞</sup>C<sub>n</sub>√n |n-1⟩。",
              "令 m=n-1，得：a|α⟩=Σ<sub>m=0</sub><sup>∞</sup>C<sub>m+1</sub>√(m+1)|m⟩。",
              "右边：α|α⟩=Σ<sub>m=0</sub><sup>∞</sup>αC<sub>m</sub>|m⟩。",
              "逐项比较 |m⟩ 系数：C<sub>m+1</sub>√(m+1)=αC<sub>m</sub>。",
              "所以递推：C<sub>m+1</sub>=αC<sub>m</sub>/√(m+1)。",
              "连续递推得到：C<sub>n</sub>=C<sub>0</sub>α<sup>n</sup>/√(n!)。"
            ], [
              "这里每一步都只是把基底 |n⟩ 的系数对齐。",
              "相干态天然是很多数态 |n⟩ 的叠加，而不是一个固定光子数。",
              "你笔记里写的递推式就是从这一行逐项比较来的。"
            ], "展开、作用 a、换指标、逐项比较，四步不能跳。"),
          S("33 用归一化确定 C₀", [
              "归一化条件：⟨α|α⟩=1。",
              "代入 C<sub>n</sub>=C<sub>0</sub>α<sup>n</sup>/√(n!)。",
              "⟨α|α⟩=|C<sub>0</sub>|<sup>2</sup>Σ<sub>n=0</sub><sup>∞</sup>|α|<sup>2n</sup>/n!。",
              "指数级数：Σ<sub>n=0</sub><sup>∞</sup>x<sup>n</sup>/n! = e<sup>x</sup>。",
              "所以：⟨α|α⟩=|C<sub>0</sub>|<sup>2</sup>e<sup>|α|²</sup>=1。",
              "取 C<sub>0</sub>=e<sup>-|α|²/2</sup>。",
              "最终：|α⟩=e<sup>-|α|²/2</sup>Σ<sub>n=0</sub><sup>∞</sup>α<sup>n</sup>|n⟩/√(n!)。"
            ], [
              "C<sub>0</sub> 只由归一化确定，整体相位通常取为 0。",
              "这个展开式说明相干态在每个数态 |n⟩ 上都有概率幅。",
              "它不是“粒子数固定的态”，而是“相位相对清楚的态”。"
            ], "相干态展开式必须有 e<sup>-|α|²/2</sup>。"),
          S("34 相干态的光子数分布是 Poisson 分布", [
              "投影到数态的振幅：⟨n|α⟩=e<sup>-|α|²/2</sup>α<sup>n</sup>/√(n!)。",
              "概率：P(n)=|⟨n|α⟩|<sup>2</sup>。",
              "所以：P(n)=e<sup>-|α|²</sup>|α|<sup>2n</sup>/n!。",
              "令 n̄=|α|<sup>2</sup>。",
              "得到：P(n)=e<sup>-n̄</sup>n̄<sup>n</sup>/n!。"
            ], [
              "这就是 Poisson 分布。",
              "相干态的光子数不是固定的，而是在平均值 n̄ 附近涨落。",
              "宏观经典光场中 n̄ 很大，涨落的相对比例反而很小。"
            ], "相干态光子数分布一定写成 Poisson。"),
          S("35 相干态的平均光子数与涨落", [
              "平均光子数：⟨N̂⟩=⟨a<sup>†</sup>a⟩=|α|<sup>2</sup>=n̄。",
              "Poisson 分布满足：⟨n<sup>2</sup>⟩-⟨n⟩<sup>2</sup>=n̄。",
              "所以：Δn=√n̄。",
              "相对涨落：Δn/n̄ = 1/√n̄。",
              "当 n̄≫1 时，Δn/n̄≪1。"
            ], [
              "这就是为什么宏观光场看起来像确定强度的经典波。",
              "绝对涨落 √n̄ 会变大，但相对涨落 1/√n̄ 会变小。",
              "很多人只看 Δn 变大就慌了，物理上真正重要的是相对涨落。"
            ], "宏观经典极限：n̄ 大，相对涨落小。"),
          S("36 相干态中的平均电场是经典正弦波", [
              "单模电场：Ê(r,t)=iE<sub>0</sub>[ae<sup>i(k·r-ωt)</sup>-a<sup>†</sup>e<sup>-i(k·r-ωt)</sup>]。",
              "相干态中：a|α⟩=α|α⟩，且 ⟨α|a<sup>†</sup>=α<sup>*</sup>⟨α|。",
              "因此：⟨Ê(r,t)⟩=iE<sub>0</sub>[αe<sup>i(k·r-ωt)</sup>-α<sup>*</sup>e<sup>-i(k·r-ωt)</sup>]。",
              "令 α=Ae<sup>iθ</sup>。",
              "则：⟨Ê(r,t)⟩=-2E<sub>0</sub>A sin(k·r-ωt+θ)。"
            ], [
              "这就是一个有确定相位 θ 的经典电磁波。",
              "数态中平均电场为 0；相干态中平均电场随时间振荡。",
              "所以说相干态最像经典电磁波，不是文学比喻，是算出来的。"
            ], "把 a 替换成 α 后，平均电场就是经典正弦波。"),
          S("37 Number-phase 不确定关系的直观含义", [
              "数态 |n⟩：光子数完全确定，Δn=0。",
              "但数态没有确定相位，所以 ⟨Ê⟩=0。",
              "相干态 |α⟩：相位相对确定，但光子数不确定。",
              "相干态中 Δn=√n̄，Δn/n̄=1/√n̄。",
              "直观说：Δφ·Δn ≳ 1/2。"
            ], [
              "严格相位算符有技术细节，但直观结论很清楚：光子数越确定，相位越模糊。",
              "经典波需要稳定相位，所以不能是严格数态。",
              "相干态牺牲一点光子数确定性，换来清楚的相位。"
            ], "经典电磁波对应相干态，不对应严格 number state。"),
          S("38 最终逻辑链：从 Maxwell 到光子、黑体、相干态", [
              "Maxwell 方程 → 引入 A：B=∇×A，E=-∂A/∂t-∇φ。",
              "库伦规范 → ∇·A=0，φ=0，只保留两个横向偏振。",
              "A 满足波动方程 → 平面波模式，ω=ck。",
              "场能量 H → 写成 A 的时间变化平方 + 空间变化平方。",
              "微元法 → A<sub>n</sub> 像位移，相邻差分像弹簧形变。",
              "Fourier 变换 → 每个 k、λ 模式独立。",
              "量子化 → H=Σ<sub>k,λ</sub>ℏω<sub>k</sub>(a<sup>†</sup>a+1/2)。",
              "黑体 → 光子 DOS × ℏω × 玻色分布，且 μ<sub>γ</sub>=0。",
              "相干态 → |α⟩ 是不同 |n⟩ 的叠加，平均场像经典波。"
            ], [
              "整章不是一堆孤立公式，而是一条很顺的路。",
              "光子不是额外塞进来的小球，而是电磁场正常模式的量子激发。",
              "如果你能把这条链讲出来，这块基本就从‘背公式’升级成‘真的会了’。"
            ], "最后记一句：先有场的模式，再有模式量子化后的光子。")
        ]),

        T("bec", "BEC", "考试要求 13", "玻色凝聚临界温度与相干性", "T<sub>c</sub>=const·n<sup>2/3</sup>", [
          S("01 从玻色分布写粒子数方程", [
            "理想玻色气体 n̄<sub>k</sub>=1/[e<sup>β(ε<sub>k</sub>-μ)</sup>-1]。",
            "粒子数 N=N<sub>0</sub>+Σ<sub>k≠0</sub>n̄<sub>k</sub>。",
            "玻色气体要求 μ≤ε<sub>0</sub>。",
            "取基态能量 ε<sub>0</sub>=0，则 μ≤0。"
          ], [
            "BEC 的关键是激发态容纳粒子的能力有限。",
            "当 μ 逼近 0 时，基态占据可能变成宏观量。",
            "必须把基态 N<sub>0</sub> 单独拿出来。"
          ], "不要把基态也直接并入连续积分。"),
          S("02 计算激发态最大粒子数", [
            "临界点 μ→0。",
            "激发态粒子数 N<sub>ex</sub>=∫<sub>0</sub><sup>∞</sup>D(ε)dε/[e<sup>βε</sup>-1]。",
            "三维自由玻色气体 D(ε)∝Vε<sup>1/2</sup>。",
            "积分给 N<sub>ex</sub>=Vζ(3/2)/λ<sub>th</sub><sup>3</sup>。"
          ], [
            "ζ(3/2) 来自玻色积分。",
            "三维中该积分有限，因此激发态容量有限。",
            "一维、二维理想均匀气体在热力学极限下没有同样的有限温 BEC。"
          ], "写 N<sub>ex</sub>=Vζ(3/2)/λ<sub>th</sub><sup>3</sup>。"),
          S("03 临界温度", [
            "临界时 N=N<sub>ex,max</sub>。",
            "所以 nλ<sub>th,c</sub><sup>3</sup>=ζ(3/2)。",
            "λ<sub>th</sub>=h/(2πmk<sub>B</sub>T)<sup>1/2</sup>。",
            "解得 T<sub>c</sub>=[2πℏ<sup>2</sup>/(mk<sub>B</sub>)] [n/ζ(3/2)]<sup>2/3</sup>。"
          ], [
            "密度越大，临界温度越高。",
            "质量越大，热波长越短，临界温度越低。",
            "这就是简并参数判据 nλ<sub>th</sub><sup>3</sup>≈1 的精确版本。"
          ], "临界温度要从 nλ<sub>th</sub><sup>3</sup>=ζ(3/2) 解出。"),
          S("04 凝聚分数", [
            "T&lt;T<sub>c</sub> 时，μ 固定在 0。",
            "激发态粒子数 N<sub>ex</sub>(T)=N(T/T<sub>c</sub>)<sup>3/2</sup>。",
            "基态粒子数 N<sub>0</sub>=N-N<sub>ex</sub>。",
            "所以 N<sub>0</sub>/N=1-(T/T<sub>c</sub>)<sup>3/2</sup>。"
          ], [
            "降温后多出来的粒子不能再被激发态容纳，只能进入基态。",
            "宏观占据同一个量子态带来相干性。",
            "这就是 BEC 为什么可以被视为相干态的来源。"
          ], "凝聚分数是 BEC 题最常用结果。")
        ]),

        T("hubbard", "Hubbard 平均场", "考试要求 14", "自发铁磁的平均场推导", "ε<sub>kσ</sub>=ε<sub>k</sub>+U n<sub>-σ</sub>", [
          S("01 Hubbard 模型", [
            "H=-tΣ<sub>〈ij〉,σ</sub>(c<sub>iσ</sub><sup>†</sup>c<sub>jσ</sub>+h.c.)+UΣ<sub>i</sub>n<sub>i↑</sub>n<sub>i↓</sub>。",
            "第一项描述电子在相邻格点跳跃。",
            "第二项描述同一格点上下自旋电子的排斥。",
            "n<sub>iσ</sub>=c<sub>iσ</sub><sup>†</sup>c<sub>iσ</sub>。"
          ], [
            "t 倾向于离域化，U 倾向于避免双占据。",
            "铁磁平均场来自上下自旋占据不同的可能性。",
            "先写清模型，后面才有平均场对象。"
          ], "Hubbard Hamilton 量必须完整写出。"),
          S("02 平均场分解相互作用项", [
            "写 n<sub>iσ</sub>=〈n<sub>σ</sub>〉+δn<sub>iσ</sub>。",
            "乘积 n<sub>i↑</sub>n<sub>i↓</sub>=(〈n<sub>↑</sub>〉+δn<sub>i↑</sub>)(〈n<sub>↓</sub>〉+δn<sub>i↓</sub>)。",
            "忽略二阶涨落 δn<sub>i↑</sub>δn<sub>i↓</sub>。",
            "得 n<sub>i↑</sub>n<sub>i↓</sub>≈〈n<sub>↑</sub>〉n<sub>i↓</sub>+〈n<sub>↓</sub>〉n<sub>i↑</sub>-〈n<sub>↑</sub>〉〈n<sub>↓</sub>〉。"
          ], [
            "平均场不是随便替换，而是忽略涨落乘积。",
            "最后一项是常数能量修正，不能重复计算。",
            "序参量可取 m=〈n<sub>↑</sub>〉-〈n<sub>↓</sub>〉。"
          ], "把 δn 的展开写出来，说明平均场近似依据。"),
          S("03 得到自旋依赖能带", [
            "平均场 Hamilton 量中 ↑ 电子感受到 U〈n<sub>↓</sub>〉。",
            "↓ 电子感受到 U〈n<sub>↑</sub>〉。",
            "Fourier 变换 c<sub>iσ</sub>=(1/√N)Σ<sub>k</sub>e<sup>ikR<sub>i</sub></sup>c<sub>kσ</sub>。",
            "得到 ε<sub>k↑</sub>=ε<sub>k</sub>+U〈n<sub>↓</sub>〉，ε<sub>k↓</sub>=ε<sub>k</sub>+U〈n<sub>↑</sub>〉。"
          ], [
            "若 〈n<sub>↑</sub>〉≠〈n<sub>↓</sub>〉，两个自旋能带相对移动。",
            "相互作用能降低可能补偿动能代价，从而形成铁磁。",
            "这就是 Stoner 图像的平均场版本。"
          ], "写出实空间到动量空间的变换。"),
          S("04 自洽求解", [
            "先假设一个 m<sub>in</sub>=n<sub>↑</sub>-n<sub>↓</sub>。",
            "由 m<sub>in</sub> 得到两条自旋能带 ε<sub>kσ</sub>。",
            "用 Fermi 分布计算 n<sub>σ</sub>=Σ<sub>k</sub>f(ε<sub>kσ</sub>)。",
            "得到 m<sub>out</sub>=n<sub>↑</sub>-n<sub>↓</sub>，若 m<sub>out</sub>=m<sub>in</sub> 即为自洽解。"
          ], [
            "自洽不是代一次公式，而是固定点问题。",
            "非零 m 的稳定解对应自发破缺自旋旋转对称性。",
            "判断相变还要比较自由能。"
          ], "考试问自洽概念，就写输入 m、算能带、算输出 m、比较。")
        ]),

        T("hf-bcs", "HF 与 BCS", "考试要求 15-16", "Hartree-Fock、Cooper 不稳定与 BCS 平均场", "E<sub>k</sub>=(ξ<sub>k</sub><sup>2</sup>+|Δ|<sup>2</sup>)<sup>1/2</sup>", [
          S("01 二体相互作用的二次量子化形式", [
            "H<sub>int</sub>=(1/2)Σ<sub>ijkl</sub>V<sub>ij;kl</sub>c<sub>i</sub><sup>†</sup>c<sub>j</sub><sup>†</sup>c<sub>l</sub>c<sub>k</sub>。",
            "V<sub>ij;kl</sub>=〈ij|V|kl〉。",
            "1/2 用来避免粒子对重复计数。",
            "费米算符满足反对易关系。"
          ], [
            "HF 近似处理的是四费米算符。",
            "Hartree 与 Fock 的区别来自不同的平均收缩方式。",
            "反对易关系决定交换项符号。"
          ], "先写二体相互作用形式。"),
          S("02 Hartree 项", [
            "对密度型收缩取平均：c<sub>j</sub><sup>†</sup>c<sub>l</sub>→〈c<sub>j</sub><sup>†</sup>c<sub>l</sub>〉。",
            "得到单粒子在平均电荷密度中运动的势。",
            "形式上对应直接库伦相互作用。",
            "该项通常与总密度有关。"
          ], [
            "Hartree 项是经典平均电场图像。",
            "它不依赖交换反对称性的细节。",
            "在均匀带电背景中，Hartree 项常与背景电荷抵消。"
          ], "Hartree 是直接项。"),
          S("03 Fock 项", [
            "交换收缩如 c<sub>i</sub><sup>†</sup>c<sub>l</sub>→〈c<sub>i</sub><sup>†</sup>c<sub>l</sub>〉。",
            "由于费米算符重排，需要额外负号。",
            "Fock 项只在相同自旋费米子之间产生交换贡献。",
            "它体现波函数反对称性带来的量子效应。"
          ], [
            "Fock 不是经典静电势，而是交换势。",
            "它会降低同自旋电子靠近的概率。",
            "Hartree-Fock 仍然是自洽理论，因为平均场由占据态决定。"
          ], "区分直接项和交换项是重点。"),
          S("04 Cooper 不稳定", [
            "考虑费米面附近两个总动量为零的电子配对。",
            "若存在任意弱吸引 V&lt;0，只在 Debye 能窗内起作用。",
            "两体方程可化为 1=|V|Σ<sub>k</sub>1/(2ξ<sub>k</sub>-E)。",
            "费米面附近 DOS 近似常数，求和给对数发散。"
          ], [
            "对数发散意味着任意弱吸引都会产生束缚态。",
            "费米面提供大量近简并态，是不稳定的根源。",
            "这解释了为什么正常费米海会对 Cooper 配对不稳定。"
          ], "写出“任意弱吸引 + 费米面 DOS + 对数增强”。"),
          S("05 BCS 平均场 Hamilton 量", [
            "BCS 相互作用保留 (k↑,-k↓) 配对散射。",
            "定义能隙 Δ<sub>k</sub>=-Σ<sub>k'</sub>V<sub>kk'</sub>〈c<sub>-k'↓</sub>c<sub>k'↑</sub>〉。",
            "平均场 Hamilton 量含 Δ<sub>k</sub>c<sub>k↑</sub><sup>†</sup>c<sub>-k↓</sub><sup>†</sup>+h.c.。",
            "ξ<sub>k</sub>=ε<sub>k</sub>-μ。"
          ], [
            "Δ 是 Cooper 对凝聚振幅，不是单粒子平均。",
            "平均场把四费米项变成配对产生和湮灭项。",
            "这一步是 BCS 理论的核心。"
          ], "必须写 Δ 的自洽定义。"),
          S("06 Bogoliubov 变换与准粒子谱", [
            "引入 γ<sub>k↑</sub>=u<sub>k</sub>c<sub>k↑</sub>-v<sub>k</sub>c<sub>-k↓</sub><sup>†</sup>。",
            "γ<sub>-k↓</sub>=u<sub>k</sub>c<sub>-k↓</sub>+v<sub>k</sub>c<sub>k↑</sub><sup>†</sup>。",
            "要求 u<sub>k</sub><sup>2</sup>+v<sub>k</sub><sup>2</sup>=1。",
            "对角化后 E<sub>k</sub>=(ξ<sub>k</sub><sup>2</sup>+|Δ|<sup>2</sup>)<sup>1/2</sup>。"
          ], [
            "Bogoliubov 准粒子是电子和空穴的混合。",
            "能谱出现能隙 |Δ|，这是超导低能激发被压制的原因。",
            "变换保持费米反对易关系。"
          ], "准粒子能谱一定要写。"),
          S("07 BCS 基态是真空态", [
            "BCS 基态可写为 |BCS>=Π<sub>k</sub>(u<sub>k</sub>+v<sub>k</sub>c<sub>k↑</sub><sup>†</sup>c<sub>-k↓</sub><sup>†</sup>)|0>。",
            "它是空对态和成对占据态的叠加。",
            "Bogoliubov 准粒子满足 γ<sub>kσ</sub>|BCS>=0。",
            "因此 |BCS> 是准粒子真空。"
          ], [
            "考试要求中明确写了要能证明准粒子真空就是 BCS 基态。",
            "证明的核心是把 γ 作用到每个 k 的括号上，利用 u、v 抵消。",
            "BCS 基态不固定粒子数，但固定平均粒子数。"
          ], "至少写出 |BCS> 的乘积形式和 γ|BCS>=0。")
        ])
      ]
    },

    {
      id: "astro",
      name: "宇宙热史",
      topics: [
        T("friedmann", "膨胀方程", "20260615-20260617 视频", "尺度因子、Friedmann 方程、密度温度标度", "H=Ṙ/R", [
          S("01 从均匀膨胀定义尺度因子", [
            "大尺度均匀各向同性下，物理距离 r(t)=R(t)χ。",
            "χ 是共动坐标，随膨胀保持不变。",
            "对时间求导：v=ṙ=Ṙχ=(Ṙ/R)r。",
            "与 Hubble 关系 v=Hr 比较，得 H=Ṙ/R。"
          ], [
            "尺度因子 R(t) 把宇宙膨胀变成一个动力学变量。",
            "视频里从天文观测引入 Hubble 膨胀，就是为了建立这个变量。",
            "后面温度、密度、反应率都随 R 演化。"
          ], "先写 r=Rχ，再得到 H=Ṙ/R。"),
          S("02 Friedmann 方程", [
            "第一 Friedmann 方程：H<sup>2</sup>=(8πG/3)ρ-k/R<sup>2</sup>+Λ/3。",
            "加速度方程：R̈/R=-(4πG/3)(ρ+3p)+Λ/3。",
            "早期宇宙常取 k≈0、Λ 可忽略。",
            "于是 H<sup>2</sup>≈(8πG/3)ρ。"
          ], [
            "ρ 是总能量密度。",
            "压力也参与引力源，所以加速度方程中有 ρ+3p。",
            "早期热史中辐射、物质、真空能通过状态方程区分。"
          ], "写出近似条件，不要直接丢项。"),
          S("03 连续性方程的热力学推导", [
            "取共动体积 V∝R<sup>3</sup>。",
            "总能量 E=ρV=ρR<sup>3</sup>。",
            "绝热膨胀满足 dE=-p dV。",
            "所以 d(ρR<sup>3</sup>)=-p d(R<sup>3</sup>)。",
            "展开并除以 R<sup>3</sup>dt 得 ρ̇+3H(ρ+p)=0。"
          ], [
            "这一步把统计热力学和宇宙膨胀直接连接。",
            "膨胀做功会降低能量密度。",
            "视频板书里这段是推温度标度的关键。"
          ], "连续性方程要从 dE=-p dV 推出。"),
          S("04 状态方程给出密度标度", [
            "设 p=wρ。",
            "代入连续性方程：ρ̇+3Hρ(1+w)=0。",
            "用 H=Ṙ/R，写成 dρ/ρ=-3(1+w)dR/R。",
            "积分得 ρ∝R<sup>-3(1+w)</sup>。"
          ], [
            "非相对论物质 w=0，所以 ρ<sub>m</sub>∝R<sup>-3</sup>。",
            "辐射 w=1/3，所以 ρ<sub>r</sub>∝R<sup>-4</sup>，多出的 R<sup>-1</sup> 来自红移。",
            "真空能 w=-1，所以 ρ<sub>Λ</sub> 为常数。"
          ], "从微分方程积分出标度关系。"),
          S("05 辐射主导时 R(t) 和 T(t)", [
            "辐射主导：ρ∝R<sup>-4</sup>。",
            "Friedmann 方程给 (Ṙ/R)<sup>2</sup>∝R<sup>-4</sup>。",
            "所以 Ṙ∝R<sup>-1</sup>，积分得 R∝t<sup>1/2</sup>。",
            "光子温度随红移 T∝1/R，因此 T∝t<sup>-1/2</sup>。"
          ], [
            "早期宇宙可用温度当时钟。",
            "反应率和膨胀率都可以写成 T 的函数后比较。",
            "这为退耦条件 Γ≈H 做准备。"
          ], "写出 R∝t<sup>1/2</sup> 和 T∝1/R。")
        ]),

        T("decouple", "粒子退耦", "20260622 视频", "反应率 Γ 与膨胀率 H 的竞争", "Γ=n〈σv〉", [
          S("01 微观反应率", [
            "单个粒子单位时间发生碰撞或反应的次数 Γ=n〈σv〉。",
            "n 是靶粒子数密度。",
            "σ 是反应截面。",
            "v 是相对速度，热平均记为 〈σv〉。"
          ], [
            "早期宇宙温度高、密度高，反应频繁。",
            "膨胀使 n 下降，通常 Γ 会随时间降低。",
            "Γ<sup>-1</sup> 是微观热化时间尺度。"
          ], "退耦题第一行通常写 Γ=n〈σv〉。"),
          S("02 背景膨胀时间尺度", [
            "宇宙膨胀率 H=Ṙ/R。",
            "背景显著变化的时间尺度 t<sub>exp</sub>≈H<sup>-1</sup>。",
            "微观相互作用时间 t<sub>int</sub>≈Γ<sup>-1</sup>。",
            "比较 t<sub>int</sub> 与 t<sub>exp</sub> 等价于比较 Γ 与 H。"
          ], [
            "Γ≫H 时，粒子来得及反复碰撞，保持热平衡。",
            "Γ≲H 时，宇宙变化太快，反应跟不上，发生退耦或冻结。",
            "视频中的数量级估算都围绕这两个时间尺度。"
          ], "把 Γ 和 H 说成时间尺度比较，物理意义更清楚。"),
          S("03 退耦条件", [
            "热平衡条件：Γ/H≫1。",
            "退耦临界：Γ(T<sub>d</sub>)≈H(T<sub>d</sub>)。",
            "退耦之后，物理数密度通常随 R<sup>-3</sup> 稀释。",
            "若粒子相对论自由流，动量 p∝1/R。"
          ], [
            "退耦不是瞬时开关，而是数量级交叉。",
            "冻结后共动数密度 nR<sup>3</sup> 近似守恒。",
            "中微子、暗物质热冻结都遵循这类逻辑。"
          ], "写 Γ≈H，而不是只写“碰撞停止”。"),
          S("04 弱相互作用退耦估算", [
            "相对论粒子数密度 n∝T<sup>3</sup>。",
            "弱相互作用截面量级 〈σv〉∝G<sub>F</sub><sup>2</sup>T<sup>2</sup>。",
            "所以 Γ∝G<sub>F</sub><sup>2</sup>T<sup>5</sup>。",
            "辐射主导时 H≈1.66g<sub>*</sub><sup>1/2</sup>T<sup>2</sup>/M<sub>Pl</sub>。",
            "令 Γ=H，得 T<sub>d</sub><sup>3</sup>∝1/(G<sub>F</sub><sup>2</sup>M<sub>Pl</sub>)。"
          ], [
            "Γ 随 T<sup>5</sup> 降低，比 H 的 T<sup>2</sup> 降得更快。",
            "所以温度下降后弱反应必然跟不上膨胀。",
            "这对应中微子退耦和 n/p 冻结的数量级结构。"
          ], "记住 Γ∝T<sup>5</sup>，H∝T<sup>2</sup>。"),
          S("05 退耦后温度可不同", [
            "退耦粒子自由流，动量红移 p∝R<sup>-1</sup>。",
            "若仍相对论，可定义 T<sub>dec</sub>∝R<sup>-1</sup>。",
            "仍耦合的粒子若发生湮灭，会把熵加热给光子浴。",
            "因此退耦粒子温度可低于光子温度。"
          ], [
            "中微子温度低于 CMB 温度就是这个机制。",
            "统计分布形状可保留，但温度参数与光子浴脱钩。",
            "这说明分布函数会随宇宙背景演化。"
          ], "退耦后不是没有温度概念，而是温度不再与光子浴相同。")
        ]),

        T("cmb", "复合与 CMB", "20260624上 视频", "Saha 方程、光子退耦和微波背景", "x<sub>e</sub><sup>2</sup>/(1-x<sub>e</sub>)", [
          S("01 写出复合反应和平衡条件", [
            "复合反应 p+e ⇌ H+γ。",
            "化学平衡要求 μ<sub>p</sub>+μ<sub>e</sub>=μ<sub>H</sub>。",
            "非相对论稀薄气体数密度 n<sub>i</sub>=g<sub>i</sub>(m<sub>i</sub>T/2πℏ<sup>2</sup>)<sup>3/2</sup>e<sup>(μ<sub>i</sub>-m<sub>i</sub>)/T</sup>。",
            "氢结合能 B=m<sub>p</sub>+m<sub>e</sub>-m<sub>H</sub>=13.6 eV。"
          ], [
            "复合是电子和质子形成中性氢。",
            "高能光子尾部会电离氢，所以复合温度远低于 13.6 eV。",
            "Saha 方程就是化学势平衡加数密度公式。"
          ], "先写 μ<sub>p</sub>+μ<sub>e</sub>=μ<sub>H</sub>。"),
          S("02 推出 Saha 方程", [
            "把三种粒子的 n<sub>i</sub> 表达式相除。",
            "化学势指数因 μ<sub>p</sub>+μ<sub>e</sub>-μ<sub>H</sub>=0 抵消。",
            "质量指数留下 e<sup>-B/T</sup>。",
            "得到 n<sub>e</sub>n<sub>p</sub>/n<sub>H</sub>≈(m<sub>e</sub>T/2πℏ<sup>2</sup>)<sup>3/2</sup>e<sup>-B/T</sup>。"
          ], [
            "质子和氢原子质量近似抵消，只留下电子的热波长因子。",
            "指数 e<sup>-B/T</sup> 表示克服束缚能的 Boltzmann 抑制。",
            "光子数很多会推迟复合。"
          ], "Saha 方程不能只写结论，要说明指数来自结合能。"),
          S("03 写成电离度形式", [
            "定义重子数密度 n<sub>b</sub>=n<sub>p</sub>+n<sub>H</sub>。",
            "电中性给 n<sub>e</sub>=n<sub>p</sub>。",
            "定义 x<sub>e</sub>=n<sub>e</sub>/n<sub>b</sub>。",
            "于是 n<sub>p</sub>=x<sub>e</sub>n<sub>b</sub>，n<sub>H</sub>=(1-x<sub>e</sub>)n<sub>b</sub>。",
            "代入得 x<sub>e</sub><sup>2</sup>/(1-x<sub>e</sub>)=(1/n<sub>b</sub>)(m<sub>e</sub>T/2πℏ<sup>2</sup>)<sup>3/2</sup>e<sup>-B/T</sup>。"
          ], [
            "x<sub>e</sub> 从接近 1 降到很小，标志自由电子迅速减少。",
            "n<sub>b</sub> 很小而光子很多，使复合不是在 T=13.6 eV 发生。",
            "这是 CMB 最后散射面形成的前置条件。"
          ], "电离度形式要完整写 x<sub>e</sub> 的定义。"),
          S("04 光子退耦", [
            "光子主要通过 Thomson 散射与自由电子耦合。",
            "散射率 Γ<sub>γ</sub>=n<sub>e</sub>σ<sub>T</sub>c。",
            "复合后 n<sub>e</sub> 急剧下降。",
            "当 Γ<sub>γ</sub>≈H 时，光子退耦并自由传播，形成 CMB。"
          ], [
            "CMB 是最后散射面释放的热辐射。",
            "退耦后光子波长随 R 增大，温度按 T∝1/R 降低。",
            "今天约 2.7 K 的 CMB 保存了早期热平衡痕迹。"
          ], "复合降低 n<sub>e</sub>，n<sub>e</sub> 降低导致光子退耦。")
        ]),

        T("bbn", "原初核合成", "20260624下 视频", "n/p 冻结、氘瓶颈与 He-4 丰度", "Y<sub>p</sub>=2r/(1+r)", [
          S("01 中子质子平衡比", [
            "弱反应维持 n 和 p 转换，例如 n+ν<sub>e</sub>⇌p+e<sup>-</sup>。",
            "平衡时 n<sub>n</sub>/n<sub>p</sub>=e<sup>-(m<sub>n</sub>-m<sub>p</sub>)/T</sup>。",
            "记 Δm=m<sub>n</sub>-m<sub>p</sub>≈1.29 MeV。",
            "温度降低时，中子比例下降。"
          ], [
            "中子更重，所以低温下被 Boltzmann 因子抑制。",
            "只要弱反应足够快，n/p 会跟随平衡值变化。",
            "这一步把统计力学分布直接用于宇宙核合成。"
          ], "n/p 的 Boltzmann 因子是 BBN 丰度估算第一步。"),
          S("02 n/p 冻结", [
            "弱反应率 Γ<sub>w</sub>∝G<sub>F</sub><sup>2</sup>T<sup>5</sup>。",
            "膨胀率 H∝T<sup>2</sup>/M<sub>Pl</sub>。",
            "当 Γ<sub>w</sub>≈H 时，n/p 不再跟随平衡值。",
            "冻结后自由中子继续 β 衰变，使 n/p 进一步降低。"
          ], [
            "冻结不是反应完全消失，而是反应太慢无法维持平衡。",
            "从冻结到核合成开始有时间间隔，中子衰变必须考虑。",
            "最终常用数量级 r=n<sub>n</sub>/n<sub>p</sub>≈1/7。"
          ], "写 Γ<sub>w</sub>≈H 和中子衰变修正。"),
          S("03 氘瓶颈", [
            "核合成要先形成氘：p+n⇌D+γ。",
            "氘结合能约 2.2 MeV。",
            "光子数远多于重子数，高能尾部光子会光解氘。",
            "所以必须等温度远低于 2.2 MeV 后，氘才能稳定存在。"
          ], [
            "氘瓶颈推迟了重元素合成开始时间。",
            "一旦氘稳定，核反应网络迅速把中子锁进 He-4。",
            "这也是为什么 He-4 丰度主要由冻结后的 n/p 决定。"
          ], "不要说“温度低了就合成”，要说明氘瓶颈。"),
          S("04 He-4 丰度估算", [
            "设核合成开始时 r=n<sub>n</sub>/n<sub>p</sub>。",
            "几乎所有剩余中子进入 He-4。",
            "每个 He-4 含 2 个中子和 2 个质子，所以 n<sub>He</sub>=n<sub>n</sub>/2。",
            "质量丰度 Y<sub>p</sub>=4n<sub>He</sub>/(n<sub>p</sub>+n<sub>n</sub>)。",
            "代入得 Y<sub>p</sub>=2n<sub>n</sub>/(n<sub>p</sub>+n<sub>n</sub>)=2r/(1+r)。"
          ], [
            "若 r≈1/7，则 Y<sub>p</sub>≈2/8=1/4。",
            "这给出原初氦质量丰度约 25%。",
            "这个估算把 Boltzmann 因子、冻结、衰变和核反应串在一起。"
          ], "Y<sub>p</sub>=2r/(1+r) 要会自己推出来。"),
          S("05 统计力学在 BBN 中的角色", [
            "平衡丰度来自 Boltzmann 因子和化学势平衡。",
            "退耦和冻结来自 Γ 与 H 的比较。",
            "反应阈值和结合能通过 e<sup>-B/T</sup> 控制。",
            "最终元素丰度由冻结值加反应网络演化决定。"
          ], [
            "宇宙学视频中的天体物理内容，本质上反复使用高统的系综、分布函数和反应率思想。",
            "温度是时间变量，配分函数和分布函数是微观输入。",
            "这就是把高等统计力学和早期宇宙热史接起来的主线。"
          ], "总结题可按“平衡-冻结-反应网络”三段写。")
        ])
      ]
    }
  ];
})();
