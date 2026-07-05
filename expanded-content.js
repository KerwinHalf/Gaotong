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

        T("emfield", "电磁场/黑体/相干态", "考试要求 10-12", "微元法量子化电磁场、黑体辐射与相干态", "H=Σ<sub>k,λ</sub>ℏω(n+1/2)", [
          S("01 从电磁场能量写 Hamilton 量", [
            "电磁场能量 H=(1/2)∫d<sup>3</sup>r[ε<sub>0</sub>E<sup>2</sup>+(1/μ<sub>0</sub>)B<sup>2</sup>]。",
            "采用 Coulomb 规范 ∇·A=0。",
            "无源辐射场中 E=-∂A/∂t，B=∇×A。",
            "目标是把 A 的每个横向 Fourier 模化成谐振子。"
          ], [
            "考试要求中明确提到从电磁场能量表达式出发。",
            "Coulomb 规范去掉纵向自由度，只保留横向光子。",
            "这和一维原子链量子化结构完全平行。"
          ], "先写 H、电磁势关系和 Coulomb 规范。"),
          S("02 模展开和两个横向偏振", [
            "在体积 V 中取周期边界，A(r,t)=Σ<sub>k,λ</sub>q<sub>kλ</sub>(t)e<sub>kλ</sub>e<sup>ik·r</sup>/√V。",
            "横向条件 k·e<sub>kλ</sub>=0。",
            "对每个 k 有两个独立偏振 λ=1,2。",
            "正交归一使不同 k、λ 模互不耦合。"
          ], [
            "光子简并度为 2，不是 3，因为电磁波是横波。",
            "周期边界让求和与态密度计算方便。",
            "每个模式的广义坐标是 q<sub>kλ</sub>。"
          ], "写清两个横向偏振。"),
          S("03 每个模式等价于谐振子", [
            "代入场能量并用正交关系。",
            "H=Σ<sub>k,λ</sub>[p<sub>kλ</sub><sup>2</sup>/2+(ω<sub>k</sub><sup>2</sup>q<sub>kλ</sub><sup>2</sup>)/2]，差别只在归一化约定。",
            "ω<sub>k</sub>=c|k|。",
            "这就是很多互不耦合的简谐振子。"
          ], [
            "资料中所谓微元法，本质是把连续场离散成很多正常模。",
            "正常模对角化后才能逐个量子化。",
            "声子与光子的统一点：都是谐振子模式的量子。"
          ], "一定写出 ω=c|k|。"),
          S("04 量子化并得到光子 Hamilton 量", [
            "令 [q̂<sub>kλ</sub>,p̂<sub>k'λ'</sub>]=iℏδ<sub>kk'</sub>δ<sub>λλ'</sub>。",
            "定义产生湮灭算符 a<sub>kλ</sub>、a<sub>kλ</sub><sup>†</sup>。",
            "H=Σ<sub>k,λ</sub>ℏω<sub>k</sub>(a<sub>kλ</sub><sup>†</sup>a<sub>kλ</sub>+1/2)。",
            "n<sub>kλ</sub>=a<sub>kλ</sub><sup>†</sup>a<sub>kλ</sub> 是光子数。"
          ], [
            "光子是电磁场正常模的能量量子。",
            "光子数不守恒，所以平衡辐射场化学势 μ=0。",
            "这直接导向 Planck 黑体分布。"
          ], "电磁场量子化最终必须写成谐振子求和。"),
          S("05 黑体辐射能量密度", [
            "每个模式平均光子数 n̄=1/(e<sup>βℏω</sup>-1)。",
            "光子 DOS：g(ω)dω=Vω<sup>2</sup>dω/(π<sup>2</sup>c<sup>3</sup>)，其中已含两个偏振。",
            "单位体积能量密度 u(ω)dω=[ℏω/(e<sup>βℏω</sup>-1)]ω<sup>2</sup>dω/(π<sup>2</sup>c<sup>3</sup>)。",
            "这就是 Planck 分布。"
          ], [
            "与声子 Debye 积分很像，但光子没有 Debye 截止。",
            "两个偏振使系数中出现 1/π<sup>2</sup>。",
            "黑体辐射是玻色统计和电磁 DOS 的合体。"
          ], "写出 u(ω)dω 的完整形式。"),
          S("06 相干态的定义", [
            "单个谐振子模式的相干态定义为 a|α>=α|α>。",
            "可展开为 |α>=e<sup>-|α|<sup>2</sup>/2</sup>Σ<sub>n=0</sub><sup>∞</sup>α<sup>n</sup>|n>/√(n!)。",
            "平均光子数 〈n〉=|α|<sup>2</sup>。",
            "数涨落满足 Δn=|α|，相对涨落 Δn/〈n〉=1/|α|。"
          ], [
            "相干态不是固定光子数态，而是不同 n 的叠加。",
            "当 |α| 很大时，相对涨落很小，场表现得像经典波。",
            "这就是相干态对应经典电磁场的统计理解。"
          ], "定义 a|α>=α|α>，再写 Fock 展开。"),
          S("07 相干态随时间演化像经典振动", [
            "谐振子 Hamilton 量 H=ℏω(a<sup>†</sup>a+1/2)。",
            "若初态为 |α>，时间演化后仍为相干态 |αe<sup>-iωt</sup>>。",
            "场的平均值 〈E(t)〉 或 〈A(t)〉 随 cos(ωt+φ) 振荡。",
            "相位由复数 α 的相位决定。"
          ], [
            "保持最小不确定度并随时间旋转，是相干态“最经典”的原因。",
            "激光可近似看成多模或单模相干态。",
            "声子相干态同样对应经典弹性波。"
          ], "把 α 的相位和经典振动相位联系起来。")
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
