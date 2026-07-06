(function () {
  const DATA = window.EXPANDED_DATA || [];
  const findSection = (id) => DATA.find((x) => x.id === id);
  const setTopic = (sectionId, topic) => {
    const sec = findSection(sectionId);
    if (!sec) return;
    const i = sec.topics.findIndex((x) => x.id === topic.id);
    if (i >= 0) sec.topics[i] = { ...sec.topics[i], ...topic };
    else sec.topics.push(topic);
  };
  const updates = [
  [
    "ensemble",
    {
      "id": "entropy",
      "label": "统计熵与最大熵原理",
      "exam": "考试要求1-2 / 真题常考第一问",
      "summary": "从系综平均、Gibbs 熵、等概率原理到 Boltzmann 因子，全程不跳步。",
      "core": "p_i=e^{-\beta E_i}/Z",
      "steps": [
        {
          "title": "01 系综平均先于熵定义",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\hat\\rho=\\sum_\\lambda p_\\lambda |\\psi_\\lambda\\rangle\\langle\\psi_\\lambda|\\]</span></span><span class='why'>量子统计中用密度算符描述混态；p_λ 是系统处在态 |ψ_λ⟩ 的概率。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[\\langle \\hat A\\rangle=\\mathrm{Tr}(\\hat\\rho\\hat A)\\]</span></span><span class='why'>宏观测量值不是某个波函数的单次结果，而是对系综概率加权后的平均。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\mathrm{Tr}\\,\\hat\\rho=\\sum_\\lambda p_\\lambda=1\\]</span></span><span class='why'>密度算符的迹等于 1，本质上就是概率归一化。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[\\hat\\rho^\\dagger=\\hat\\rho\\]</span></span><span class='why'>ρ 必须是厄米算符，这样任意可观测量的平均值才是实数。</span>"
          ],
          "notes": [
            "真题里常问 Gibbs 熵、系综平均、密度矩阵三者关系；别把 ρ 说成某个单态波函数。",
            "这里的 p_λ 是概率，不是配分函数，符号别又被人类的记号系统搞成一锅粥。"
          ],
          "exam": "先写 ρ、Trρ=1、⟨A⟩=TrρA。"
        },
        {
          "title": "02 Gibbs 熵与 Boltzmann 熵的关系",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[S_G=-k_B\\sum_i p_i\\ln p_i\\]</span></span><span class='why'>Gibbs 熵适用于任意概率分布。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[p_i=\\frac1W\\quad(i=1,\\cdots,W)\\]</span></span><span class='why'>微正则系综中，在能量壳内的 W 个可达微观态等概率。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[S_G=-k_B\\sum_{i=1}^{W}\\frac1W\\ln\\frac1W\\]</span></span><span class='why'>把等概率分布代入 Gibbs 熵。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[S_G=k_B\\ln W\\equiv S_B\\]</span></span><span class='why'>于是 Boltzmann 熵是 Gibbs 熵在孤立系统等概率情形下的特例。</span>"
          ],
          "notes": [
            "考试写“二者等价”太粗暴，应该写清楚“Gibbs 更一般，Boltzmann 是等概率特例”。"
          ],
          "exam": "会从 Gibbs 熵一步代入推出 S=kB lnW。"
        },
        {
          "title": "03 最大熵问题的两个约束",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[\\sum_i p_i=1\\]</span></span><span class='why'>概率归一化约束。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[\\sum_i p_iE_i=\\langle E\\rangle=U\\]</span></span><span class='why'>正则系综只固定平均能量，不固定每个微观态能量。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\Phi=-\\sum_i p_i\\ln p_i+\\alpha\\left(\\sum_i p_i-1\\right)-\\beta\\left(\\sum_i p_iE_i-U\\right)\\]</span></span><span class='why'>用拉格朗日乘子把受约束极值问题改写为普通极值问题。</span>"
          ],
          "notes": [
            "若少写能量约束，只能推出等概率；若少写归一化约束，p_i 根本不是概率。"
          ],
          "exam": "两个约束必须同时出现。"
        },
        {
          "title": "04 对每个概率逐项变分",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[\\frac{\\partial}{\\partial p_i}\\left[-p_i\\ln p_i\\right]=-(\\ln p_i+1)\\]</span></span><span class='why'>用 d(p ln p)/dp=lnp+1。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[\\frac{\\partial\\Phi}{\\partial p_i}=-(\\ln p_i+1)+\\alpha-\\beta E_i=0\\]</span></span><span class='why'>每个 p_i 独立变化，所以每个偏导都必须为零。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[\\ln p_i=\\alpha-1-\\beta E_i\\]</span></span><span class='why'>把未知常数和能量项分开。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[p_i=e^{\\alpha-1}e^{-\\beta E_i}\\]</span></span><span class='why'>指数权重来自最大熵，而不是拍脑袋。</span>"
          ],
          "notes": [
            "真题答案里常直接写 P_i∝e^{-βε_i}，你复习时要能补上中间变分过程。"
          ],
          "exam": "重点是写出 ∂Φ/∂p_i=0。"
        },
        {
          "title": "05 归一化给出配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[1=\\sum_i p_i=e^{\\alpha-1}\\sum_i e^{-\\beta E_i}\\]</span></span><span class='why'>把概率表达式代回归一化。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[Z=\\sum_i e^{-\\beta E_i}\\]</span></span><span class='why'>定义正则配分函数。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[e^{\\alpha-1}=\\frac1Z\\]</span></span><span class='why'>归一化常数被 Z 吸收。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[p_i=\\frac{e^{-\\beta E_i}}{Z}\\]</span></span><span class='why'>得到 Boltzmann 分布。</span>"
          ],
          "notes": [
            "Z 不是随便引入的，它就是归一化因子；这点别写得像玄学召唤。"
          ],
          "exam": "最后必须得到 p_i=e^{-βE_i}/Z。"
        },
        {
          "title": "06 β 的物理意义",
          "formulas": [
            "<span class='eq'><span class='mini'>6.1</span><span class='math-tex'>\\[S=-k_B\\sum_i p_i\\ln p_i\\]</span></span><span class='why'>把正则分布代回熵。</span>",
            "<span class='eq'><span class='mini'>6.2</span><span class='math-tex'>\\[\\ln p_i=-\\beta E_i-\\ln Z\\]</span></span><span class='why'>先写出 ln p_i。</span>",
            "<span class='eq'><span class='mini'>6.3</span><span class='math-tex'>\\[S=k_B\\beta U+k_B\\ln Z\\]</span></span><span class='why'>因为 Σp_iE_i=U 且 Σp_i=1。</span>",
            "<span class='eq'><span class='mini'>6.4</span><span class='math-tex'>\\[F=U-TS=-k_BT\\ln Z\\]</span></span><span class='why'>与热力学自由能比较，得到 β=1/(k_BT)。</span>"
          ],
          "notes": [
            "β 的温度意义来自热力学比较，不是拉格朗日乘子一出现就自动有温度。"
          ],
          "exam": "能从 S 表达式识别 F=-kBT lnZ。"
        }
      ]
    }
  ],
  [
    "ensemble",
    {
      "id": "canonical",
      "label": "正则、巨正则与涨落等价",
      "exam": "考试要求3-4 / 真题常考推导",
      "summary": "把正则特性函数 F、巨正则特性函数 Ω、涨落公式和系综等价连成一条线。",
      "core": "F=-k_BT\\ln Z,\\ \\Omega=-k_BT\\ln\\mathcal Z=-PV",
      "steps": [
        {
          "title": "01 正则密度算符",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\hat\\rho=\\frac{e^{-\\beta\\hat H}}{Z}\\]</span></span><span class='why'>正则系综中能量可涨落，密度算符由 Hamiltonian 决定。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[Z=\\mathrm{Tr}\\,e^{-\\beta\\hat H}\\]</span></span><span class='why'>Z 负责归一化，使 Trρ=1。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\langle \\hat A\\rangle=\\mathrm{Tr}(\\hat\\rho\\hat A)\\]</span></span><span class='why'>所有热平均都可用密度算符求迹。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[U=\\langle H\\rangle=-\\frac{\\partial\\ln Z}{\\partial\\beta}\\]</span></span><span class='why'>对 β 求导把能量从指数里拉下来。</span>"
          ],
          "notes": [
            "讲义和真题都反复用这套链条：ρ、Z、平均值、特性函数。"
          ],
          "exam": "写出 ρ=e^{-βH}/Z。"
        },
        {
          "title": "02 Helmholtz 自由能的统计表达式",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[S=k_B\\beta U+k_B\\ln Z\\]</span></span><span class='why'>由正则概率代回 Gibbs 熵得到。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[F=U-TS\\]</span></span><span class='why'>Helmholtz 自由能的热力学定义。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[F=U-T(k_B\\beta U+k_B\\ln Z)\\]</span></span><span class='why'>代入熵表达式。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[\\beta=\\frac1{k_BT}\\quad\\Rightarrow\\quad F=-k_BT\\ln Z\\]</span></span><span class='why'>U 项抵消，只剩配分函数。</span>"
          ],
          "notes": [
            "这一步是“特性函数统计表达式”的标准推导。"
          ],
          "exam": "不要只背 F=-kBTlnZ，要会从 S 推。"
        },
        {
          "title": "03 热力学量由 F 的偏导给出",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[dF=d(U-TS)=-S\\,dT-P\\,dV+\\mu\\,dN\\]</span></span><span class='why'>对 F 做 Legendre 变换。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[S=-\\left(\\frac{\\partial F}{\\partial T}\\right)_{V,N}\\]</span></span><span class='why'>温度偏导给熵。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[P=-\\left(\\frac{\\partial F}{\\partial V}\\right)_{T,N}\\]</span></span><span class='why'>体积偏导给压强。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[\\mu=\\left(\\frac{\\partial F}{\\partial N}\\right)_{T,V}\\]</span></span><span class='why'>粒子数偏导给化学势。</span>"
          ],
          "notes": [
            "F 是正则系综在 T,V,N 自然变量下的特性函数。"
          ],
          "exam": "写 dF 再比较系数。"
        },
        {
          "title": "04 能量涨落公式",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[U=-\\partial_\\beta\\ln Z\\]</span></span><span class='why'>正则内能。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[\\partial_\\beta U=-\\partial_\\beta^2\\ln Z\\]</span></span><span class='why'>再次对 β 求导。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[\\partial_\\beta^2\\ln Z=\\langle E^2\\rangle-\\langle E\\rangle^2\\]</span></span><span class='why'>这是配分函数二阶导数给出的方差。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[\\langle(\\Delta E)^2\\rangle=-\\frac{\\partial U}{\\partial\\beta}\\]</span></span><span class='why'>得到能量涨落公式。</span>",
            "<span class='eq'><span class='mini'>4.5</span><span class='math-tex'>\\[\\frac{\\partial U}{\\partial\\beta}=\\left(\\frac{\\partial U}{\\partial T}\\right)_V\\frac{\\partial T}{\\partial\\beta}=C_V\\left(-k_BT^2\\right)\\]</span></span><span class='why'>用 β=1/kBT 换变量。</span>",
            "<span class='eq'><span class='mini'>4.6</span><span class='math-tex'>\\[\\langle(\\Delta E)^2\\rangle=k_BT^2C_V\\]</span></span><span class='why'>正则系综的能量涨落。</span>"
          ],
          "notes": [
            "系综等价不靠嘴硬，靠相对涨落随 N 变小。"
          ],
          "exam": "推到 ⟨(ΔE)^2⟩=kBT²CV。"
        },
        {
          "title": "05 热力学极限下的系综等价",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[U\\propto N,\\qquad C_V\\propto N\\]</span></span><span class='why'>内能和热容都是广延量。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[\\sqrt{\\langle(\\Delta E)^2\\rangle}\\propto \\sqrt{N}\\]</span></span><span class='why'>能量涨落的绝对量随 √N 增长。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[\\frac{\\sqrt{\\langle(\\Delta E)^2\\rangle}}{U}\\propto \\frac1{\\sqrt N}\\to0\\]</span></span><span class='why'>相对涨落在热力学极限中消失。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[N\\to\\infty,\\quad V\\to\\infty,\\quad N/V=\\mathrm{const}\\]</span></span><span class='why'>这就是热力学极限。</span>"
          ],
          "notes": [
            "所以微正则与正则给出的宏观热力学结果一致。"
          ],
          "exam": "考试问“为什么等价”，就写相对涨落趋零。"
        },
        {
          "title": "06 巨正则分布与巨配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>6.1</span><span class='math-tex'>\\[\\hat\\rho_G=\\frac{e^{-\\beta(\\hat H-\\mu\\hat N)}}{\\mathcal Z}\\]</span></span><span class='why'>巨正则系综允许能量和粒子数都涨落。</span>",
            "<span class='eq'><span class='mini'>6.2</span><span class='math-tex'>\\[\\mathcal Z=\\mathrm{Tr}\\,e^{-\\beta(\\hat H-\\mu\\hat N)}\\]</span></span><span class='why'>巨配分函数。</span>",
            "<span class='eq'><span class='mini'>6.3</span><span class='math-tex'>\\[\\Omega=U-TS-\\mu N=-k_BT\\ln\\mathcal Z\\]</span></span><span class='why'>巨势是巨正则系综的特性函数。</span>",
            "<span class='eq'><span class='mini'>6.4</span><span class='math-tex'>\\[\\langle N\\rangle=\\frac1\\beta\\frac{\\partial\\ln\\mathcal Z}{\\partial\\mu}=z\\frac{\\partial\\ln\\mathcal Z}{\\partial z}\\]</span></span><span class='why'>其中 z=e^{βμ} 是逸度。</span>"
          ],
          "notes": [
            "“逸度不是配分函数”，它是 z=e^{βμ}，别再让符号起义。"
          ],
          "exam": "巨正则必须写 H-μN。"
        },
        {
          "title": "07 为什么 Ω=-PV",
          "formulas": [
            "<span class='eq'><span class='mini'>7.1</span><span class='math-tex'>\\[d\\Omega=d(U-TS-\\mu N)=-S\\,dT-P\\,dV-N\\,d\\mu\\]</span></span><span class='why'>巨势的自然变量是 T,V,μ。</span>",
            "<span class='eq'><span class='mini'>7.2</span><span class='math-tex'>\\[\\left(\\frac{\\partial\\Omega}{\\partial V}\\right)_{T,\\mu}=-P\\]</span></span><span class='why'>由全微分比较系数。</span>",
            "<span class='eq'><span class='mini'>7.3</span><span class='math-tex'>\\[\\Omega\\ \\text{是广延量}\\Rightarrow\\Omega(T,V,\\mu)=V\\,\\omega(T,\\mu)\\]</span></span><span class='why'>在均匀体系中 Ω 与体积成正比。</span>",
            "<span class='eq'><span class='mini'>7.4</span><span class='math-tex'>\\[\\frac{\\partial\\Omega}{\\partial V}=\\omega=-P\\]</span></span><span class='why'>所以单位体积巨势密度等于 -P。</span>",
            "<span class='eq'><span class='mini'>7.5</span><span class='math-tex'>\\[\\Omega=-PV\\]</span></span><span class='why'>得到状态方程形式。</span>"
          ],
          "notes": [
            "这一步是你之前纠结的“巨势为什么是 -PV”。关键在自然变量和广延性。"
          ],
          "exam": "从 dΩ 和广延性两步推出。"
        }
      ]
    }
  ],
  [
    "ensemble",
    {
      "id": "idealgas",
      "label": "经典理想气体、热波长与简并判据",
      "exam": "考试要求5 / 量子理想气体1",
      "summary": "从单粒子配分函数到理想气体状态方程，再把热德布罗意波长和简并参数接上。",
      "core": "n\\lambda_{th}^3",
      "steps": [
        {
          "title": "01 单粒子配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\epsilon_p=\\frac{p^2}{2m}\\]</span></span><span class='why'>非相对论自由粒子的单粒子能量。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[Z_1=\\frac{gV}{h^3}\\int d^3p\\,e^{-\\beta p^2/2m}\\]</span></span><span class='why'>相空间中每个量子态占体积 h^3，自旋简并度为 g。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\int d^3p\\,e^{-\\beta p^2/2m}=\\left(\\frac{2\\pi m}{\\beta}\\right)^{3/2}\\]</span></span><span class='why'>三维高斯积分分解成三个一维高斯积分。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[Z_1=gV\\left(\\frac{2\\pi m k_BT}{h^2}\\right)^{3/2}=\\frac{gV}{\\lambda_{th}^3}\\]</span></span><span class='why'>定义热德布罗意波长。</span>"
          ],
          "notes": [
            "这里的 λ_th 是温度给出的热动量尺度对应的波长，不是某个单粒子的确定德布罗意波长。"
          ],
          "exam": "单粒子配分函数要会积分。"
        },
        {
          "title": "02 热德布罗意波长",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[\\lambda_{th}=\\frac{h}{\\sqrt{2\\pi m k_BT}}\\]</span></span><span class='why'>热波长由典型热动量 p_T\\sim\\sqrt{mk_BT} 决定，2π 来自配分函数约定。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[n\\lambda_{th}^3\\ll1\\]</span></span><span class='why'>一个热波包体积内平均粒子数远小于 1，波包重叠很少，经典极限成立。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[n\\lambda_{th}^3\\gtrsim1\\]</span></span><span class='why'>波包开始重叠，交换对称性不可忽略，进入量子简并区。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[n\\lambda_{th}^3\\gg1\\]</span></span><span class='why'>强简并，费米气会形成费米海，玻色气可能出现凝聚。</span>"
          ],
          "notes": [
            "讲义把简并度作为量子/经典判据，这正是你之前问“一个波包体积内粒子概率很小”的数学版本。"
          ],
          "exam": "简并参数是 nλ_th³。"
        },
        {
          "title": "03 N 个经典全同粒子的配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[Z_N=\\frac{Z_1^N}{N!}\\]</span></span><span class='why'>N! 来自 Gibbs 修正，避免把全同粒子的排列当成新态。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[\\ln Z_N=N\\ln Z_1-\\ln N!\\]</span></span><span class='why'>取对数方便求自由能。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\ln N!\\simeq N\\ln N-N\\]</span></span><span class='why'>热力学极限用 Stirling 公式。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[F=-k_BT\\ln Z_N=-Nk_BT\\left[\\ln\\frac{gV}{N\\lambda_{th}^3}+1\\right]\\]</span></span><span class='why'>得到经典理想气体 Helmholtz 自由能。</span>"
          ],
          "notes": [
            "N! 是考试里区分“会背公式”和“真懂全同粒子”的地方。"
          ],
          "exam": "要写 Z_N=Z_1^N/N!。"
        },
        {
          "title": "04 状态方程",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[P=-\\left(\\frac{\\partial F}{\\partial V}\\right)_{T,N}\\]</span></span><span class='why'>正则系综中压强由 F 的体积偏导得到。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[F=-Nk_BT\\ln V+\\text{与 V 无关项}\\]</span></span><span class='why'>只保留 V 相关部分。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[P=\\frac{Nk_BT}{V}\\]</span></span><span class='why'>对 V 求导。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[PV=Nk_BT\\]</span></span><span class='why'>经典理想气体状态方程。</span>"
          ],
          "notes": [
            "网站里已经有状态方程，这里补上从配分函数到偏导的完整路径。"
          ],
          "exam": "从 F 直接求 P。"
        },
        {
          "title": "05 Maxwell 分布和整体漂移能量",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[f(\\mathbf v)=\\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2}\\exp\\left[-\\frac{m(\\mathbf v-\\mathbf v_0)^2}{2k_BT}\\right]\\]</span></span><span class='why'>若气体整体以 v0 漂移，速度分布中心平移。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[\\langle v_x^2\\rangle=\\frac{k_BT}{m},\\quad \\langle v_y^2\\rangle=\\frac{k_BT}{m}\\]</span></span><span class='why'>横向无漂移，只有热运动贡献。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[\\langle v_z^2\\rangle=\\frac{k_BT}{m}+v_0^2\\]</span></span><span class='why'>沿漂移方向多出整体运动项。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[\\left\\langle\\frac12mv^2\\right\\rangle=\\frac32k_BT+\\frac12mv_0^2\\]</span></span><span class='why'>平均平动能=无规则热运动能+整体运动能。</span>"
          ],
          "notes": [
            "这来自真题/作业型推导，积分时奇函数项为零。"
          ],
          "exam": "会解释漂移项和热项为什么相加。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "fdbe",
      "label": "二次量子化推出 FD/BE 分布",
      "exam": "考试要求2-3",
      "summary": "从 H=Σ εα nα 出发，逐个单粒子态分解巨配分函数，再推出平均占据数。",
      "core": "\\langle n_\u0007lpha\rangle=1/(e^{\beta(\\epsilon_\u0007lpha-\\mu)}\\pm1)",
      "steps": [
        {
          "title": "01 自由量子气体的二次量子化 Hamiltonian",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\hat H=\\sum_\\alpha \\epsilon_\\alpha \\hat n_\\alpha\\]</span></span><span class='why'>无相互作用时总能量是各单粒子态占据数乘能级能量的和。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[\\hat N=\\sum_\\alpha \\hat n_\\alpha\\]</span></span><span class='why'>总粒子数是各模式占据数之和。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\hat H-\\mu\\hat N=\\sum_\\alpha(\\epsilon_\\alpha-\\mu)\\hat n_\\alpha\\]</span></span><span class='why'>巨正则指数可以按每个单粒子态拆开。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[\\mathcal Z=\\mathrm{Tr}\\,e^{-\\beta(\\hat H-\\mu\\hat N)}=\\prod_\\alpha \\mathcal Z_\\alpha\\]</span></span><span class='why'>不同模式相互独立，所以巨配分函数因式分解。</span>"
          ],
          "notes": [
            "这是考试要求“从哈密顿量出发”的起点，不能直接写分布函数。"
          ],
          "exam": "先写 H、N，再写因式分解。"
        },
        {
          "title": "02 Fermion 单模式配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[n_\\alpha=0,1\\]</span></span><span class='why'>Pauli 不相容原理限制每个费米模式最多一个粒子。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[\\mathcal Z_\\alpha^{F}=\\sum_{n=0}^{1}e^{-\\beta(\\epsilon_\\alpha-\\mu)n}\\]</span></span><span class='why'>单模式只对 n=0 和 n=1 求和。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[\\mathcal Z_\\alpha^{F}=1+e^{-\\beta(\\epsilon_\\alpha-\\mu)}\\]</span></span><span class='why'>直接求和得到。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[\\ln\\mathcal Z_F=\\sum_\\alpha\\ln\\left[1+e^{-\\beta(\\epsilon_\\alpha-\\mu)}\\right]\\]</span></span><span class='why'>总配分函数取对数变成求和。</span>"
          ],
          "notes": [
            "费米子的 +1 不是约定，它来自 n=0,1 的求和上限。"
          ],
          "exam": "写清 nα 的取值。"
        },
        {
          "title": "03 Fermion 平均占据数",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[\\langle n_\\alpha\\rangle=-\\frac1\\beta\\frac{\\partial\\ln\\mathcal Z_F}{\\partial\\epsilon_\\alpha}\\]</span></span><span class='why'>对单粒子能级求导会把该模式占据数拉下来。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[\\frac{\\partial}{\\partial\\epsilon_\\alpha}\\ln\\left(1+e^{-\\beta(\\epsilon_\\alpha-\\mu)}\\right)=\\frac{-\\beta e^{-\\beta(\\epsilon_\\alpha-\\mu)}}{1+e^{-\\beta(\\epsilon_\\alpha-\\mu)}}\\]</span></span><span class='why'>普通链式法则。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\langle n_\\alpha\\rangle=\\frac{e^{-\\beta(\\epsilon_\\alpha-\\mu)}}{1+e^{-\\beta(\\epsilon_\\alpha-\\mu)}}\\]</span></span><span class='why'>代回导数公式。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[\\boxed{\\langle n_\\alpha\\rangle_F=\\frac1{e^{\\beta(\\epsilon_\\alpha-\\mu)}+1}}\\]</span></span><span class='why'>得到 Fermi-Dirac 分布。</span>"
          ],
          "notes": [
            "最后分母的 +1 是费米统计的标志。"
          ],
          "exam": "从 lnZ 求导推出分布。"
        },
        {
          "title": "04 Boson 单模式配分函数",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[n_\\alpha=0,1,2,\\cdots\\]</span></span><span class='why'>玻色子同一模式可占据任意多个。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[\\mathcal Z_\\alpha^{B}=\\sum_{n=0}^{\\infty}e^{-\\beta(\\epsilon_\\alpha-\\mu)n}\\]</span></span><span class='why'>单模式为等比级数。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[\\mathcal Z_\\alpha^{B}=\\frac1{1-e^{-\\beta(\\epsilon_\\alpha-\\mu)}}\\]</span></span><span class='why'>要求 |e^{-β(ε-μ)}|<1。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[\\mu<\\epsilon_0\\]</span></span><span class='why'>对所有模式都收敛，化学势必须低于最低能级。</span>"
          ],
          "notes": [
            "Boson 的 μ 不能随便取，特别不能超过基态能量。"
          ],
          "exam": "收敛条件必须说明。"
        },
        {
          "title": "05 Boson 平均占据数",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[\\ln\\mathcal Z_B=-\\sum_\\alpha\\ln\\left[1-e^{-\\beta(\\epsilon_\\alpha-\\mu)}\\right]\\]</span></span><span class='why'>总巨配分函数取对数。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[\\langle n_\\alpha\\rangle=-\\frac1\\beta\\frac{\\partial\\ln\\mathcal Z_B}{\\partial\\epsilon_\\alpha}\\]</span></span><span class='why'>同样用能级导数求占据数。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[\\boxed{\\langle n_\\alpha\\rangle_B=\\frac1{e^{\\beta(\\epsilon_\\alpha-\\mu)}-1}}\\]</span></span><span class='why'>得到 Bose-Einstein 分布。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[e^{\\beta(\\epsilon-\\mu)}\\gg1\\quad\\Rightarrow\\quad \\langle n\\rangle\\simeq e^{-\\beta(\\epsilon-\\mu)}\\]</span></span><span class='why'>低密度高温极限下 FD/BE 都回到 Maxwell-Boltzmann。</span>"
          ],
          "notes": [
            "量子统计的差异只在 ±1；经典极限下这个 ±1 可忽略。"
          ],
          "exam": "会说明经典极限。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "fermi",
      "label": "DOS、零温 Fermi 气与 Sommerfeld",
      "exam": "考试要求4-7",
      "summary": "从 k 空间态计数完整推出 DOS、N、U、P、零温性质和低温热容。",
      "core": "U/N=3E_F/5,\\ PV=2U/3",
      "steps": [
        {
          "title": "01 k 空间态密度",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\psi(x+L)=\\psi(x)\\Rightarrow e^{ikL}=1\\]</span></span><span class='why'>周期边界条件。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[k_i=\\frac{2\\pi n_i}{L}\\quad(n_i\\in\\mathbb Z)\\]</span></span><span class='why'>每个方向的 k 点间距为 2π/L。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\Delta k_x\\Delta k_y\\Delta k_z=\\left(\\frac{2\\pi}{L}\\right)^3=\\frac{(2\\pi)^3}{V}\\]</span></span><span class='why'>一个 k 态占据的 k 空间体积。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[\\sum_{\\mathbf k}\\to \\frac{V}{(2\\pi)^3}\\int d^3k\\]</span></span><span class='why'>热力学极限下求和变积分。</span>"
          ],
          "notes": [
            "DOS 的核心就是 k 态计数，别从天上掉一个 g(ε)。"
          ],
          "exam": "写出 k 间距和求和变积分。"
        },
        {
          "title": "02 三维自由粒子 DOS",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[\\epsilon=\\frac{\\hbar^2k^2}{2m}\\]</span></span><span class='why'>非相对论自由粒子色散。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[dN=g_s\\frac{V}{(2\\pi)^3}4\\pi k^2dk\\]</span></span><span class='why'>半径 k 到 k+dk 的球壳中态数。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[k=\\frac{\\sqrt{2m\\epsilon}}{\\hbar},\\qquad dk=\\frac{m}{\\hbar^2k}d\\epsilon\\]</span></span><span class='why'>把 k 变量换成能量变量。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[g(\\epsilon)=\\frac{dN}{d\\epsilon}=g_s\\frac{V}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt{\\epsilon}\\]</span></span><span class='why'>三维自由粒子的态密度。</span>"
          ],
          "notes": [
            "一维 DOS ∝ ε^{-1/2}，二维常数，三维 ∝√ε。"
          ],
          "exam": "三维 DOS 的推导必须会。"
        },
        {
          "title": "03 粒子数方程",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[N=\\int_0^\\infty g(\\epsilon)f(\\epsilon)d\\epsilon\\]</span></span><span class='why'>粒子数等于每个能级态数乘平均占据数。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[f_F(\\epsilon)=\\frac1{e^{\\beta(\\epsilon-\\mu)}+1}\\]</span></span><span class='why'>费米分布。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[N=\\frac{g_sV}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\int_0^\\infty \\frac{\\sqrt\\epsilon\\,d\\epsilon}{e^{\\beta(\\epsilon-\\mu)}+1}\\]</span></span><span class='why'>代入三维 DOS。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[\\frac{N}{V}=\\frac{g_s}{\\lambda_{th}^3}f_{3/2}(z)\\]</span></span><span class='why'>用 z=e^{βμ} 和费米积分可写成标准形式。</span>"
          ],
          "notes": [
            "这就是“粒子数方程”，需要用它隐式确定 μ(T,n)。"
          ],
          "exam": "别把 μ 当已知常数。"
        },
        {
          "title": "04 内能和状态方程",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[U=\\int_0^\\infty \\epsilon\\,g(\\epsilon)f(\\epsilon)d\\epsilon\\]</span></span><span class='why'>内能是能量加权积分。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[U=\\frac{g_sV}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\int_0^\\infty \\frac{\\epsilon^{3/2}d\\epsilon}{e^{\\beta(\\epsilon-\\mu)}+1}\\]</span></span><span class='why'>代入三维 DOS。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[\\ln\\mathcal Z=\\int_0^\\infty g(\\epsilon)\\ln\\left(1+ze^{-\\beta\\epsilon}\\right)d\\epsilon\\]</span></span><span class='why'>由巨正则配分函数变成能量积分。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[PV=k_BT\\ln\\mathcal Z\\]</span></span><span class='why'>因为 Ω=-PV=-kBT lnZ_G。</span>",
            "<span class='eq'><span class='mini'>4.5</span><span class='math-tex'>\\[PV=\\frac23U\\]</span></span><span class='why'>对非相对论自由粒子，能量二次色散给出这个维里关系。</span>"
          ],
          "notes": [
            "PV=2U/3 不只经典成立，理想量子气体也成立，只要 ε=p²/2m。"
          ],
          "exam": "能从 lnZ 或维里关系得到状态方程。"
        },
        {
          "title": "05 零温阶跃分布",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[T\\to0:\\quad f_F(\\epsilon)=\\Theta(E_F-\\epsilon)\\]</span></span><span class='why'>零温时费米分布变成阶跃函数。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[N=\\int_0^{E_F}g(\\epsilon)d\\epsilon\\]</span></span><span class='why'>费米能以下全部填满。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[n=\\frac{N}{V}=\\frac{g_s}{6\\pi^2}k_F^3\\]</span></span><span class='why'>k 空间费米球计数。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[k_F=\\left(\\frac{6\\pi^2n}{g_s}\\right)^{1/3}\\]</span></span><span class='why'>由密度决定费米波矢；若 g_s=2，则 k_F=(3π²n)^{1/3}。</span>",
            "<span class='eq'><span class='mini'>5.5</span><span class='math-tex'>\\[E_F=\\frac{\\hbar^2k_F^2}{2m}\\]</span></span><span class='why'>费米能定义。</span>"
          ],
          "notes": [
            "零温不是没有能量，而是所有低能态被填满，最高填到 E_F。"
          ],
          "exam": "费米球计数是核心。"
        },
        {
          "title": "06 零温内能与简并压",
          "formulas": [
            "<span class='eq'><span class='mini'>6.1</span><span class='math-tex'>\\[U=\\int_0^{E_F}\\epsilon g(\\epsilon)d\\epsilon\\]</span></span><span class='why'>零温积分上限是 E_F。</span>",
            "<span class='eq'><span class='mini'>6.2</span><span class='math-tex'>\\[g(\\epsilon)=C\\sqrt\\epsilon\\Rightarrow U=C\\int_0^{E_F}\\epsilon^{3/2}d\\epsilon=\\frac25CE_F^{5/2}\\]</span></span><span class='why'>三维 DOS 与能量相乘后是 ε^{3/2}。</span>",
            "<span class='eq'><span class='mini'>6.3</span><span class='math-tex'>\\[N=C\\int_0^{E_F}\\epsilon^{1/2}d\\epsilon=\\frac23CE_F^{3/2}\\]</span></span><span class='why'>粒子数积分。</span>",
            "<span class='eq'><span class='mini'>6.4</span><span class='math-tex'>\\[\\frac{U}{N}=\\frac35E_F\\]</span></span><span class='why'>两式相除。</span>",
            "<span class='eq'><span class='mini'>6.5</span><span class='math-tex'>\\[P=\\frac{2U}{3V}=\\frac25nE_F\\]</span></span><span class='why'>零温简并压来自 Pauli 填充，不来自热运动。</span>"
          ],
          "notes": [
            "这和白矮星简并压推导是同一个数学骨架。"
          ],
          "exam": "会从两个积分相除得到 3/5。"
        },
        {
          "title": "07 Sommerfeld 展开与低温热容",
          "formulas": [
            "<span class='eq'><span class='mini'>7.1</span><span class='math-tex'>\\[\\int_0^\\infty \\phi(\\epsilon)f_F(\\epsilon)d\\epsilon=\\int_0^\\mu \\phi(\\epsilon)d\\epsilon+\\frac{\\pi^2}{6}(k_BT)^2\\phi^{\\prime}(\\mu)+\\cdots\\]</span></span><span class='why'>Sommerfeld 展开的一般形式。</span>",
            "<span class='eq'><span class='mini'>7.2</span><span class='math-tex'>\\[\\mu(T)=E_F\\left[1-\\frac{\\pi^2}{12}\\left(\\frac{k_BT}{E_F}\\right)^2+\\cdots\\right]\\]</span></span><span class='why'>固定粒子数时化学势随温度略微下降。</span>",
            "<span class='eq'><span class='mini'>7.3</span><span class='math-tex'>\\[U(T)=U(0)+\\frac{\\pi^2}{4}N\\frac{(k_BT)^2}{E_F}+\\cdots\\]</span></span><span class='why'>内能低温修正为 T²。</span>",
            "<span class='eq'><span class='mini'>7.4</span><span class='math-tex'>\\[C_V=\\left(\\frac{\\partial U}{\\partial T}\\right)_V=\\frac{\\pi^2}{2}Nk_B\\frac{T}{T_F}\\]</span></span><span class='why'>热容正比 T，而不是经典的常数。</span>"
          ],
          "notes": [
            "只有费米面附近约 kBT 厚度的电子能被激发，所以热容被 T/TF 压低。"
          ],
          "exam": "Sommerfeld 热容结论要会用。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "phonon",
      "label": "一维原子链声子量子化与 Debye 热容",
      "exam": "考试要求8-9",
      "summary": "从实空间位移 Hamiltonian 到 Fourier 正则坐标，再到产生湮灭算符和低温 Debye 热容。",
      "core": "\\hat H=\\sum_q\\hbar\\omega_q(a_q^\\dagger a_q+1/2)",
      "steps": [
        {
          "title": "01 一维单原子链 Hamiltonian",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[H=\\sum_j\\frac{p_j^2}{2M}+\\frac K2\\sum_j(u_{j+1}-u_j)^2\\]</span></span><span class='why'>最近邻弹簧近似，u_j 是第 j 个原子偏离平衡位置的位移。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[u_j=\\frac1{\\sqrt N}\\sum_q Q_q e^{iqja}\\]</span></span><span class='why'>对位移做离散 Fourier 变换。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[p_j=\\frac1{\\sqrt N}\\sum_q P_q e^{iqja}\\]</span></span><span class='why'>动量也做 Fourier 变换。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[Q_{-q}=Q_q^*,\\quad P_{-q}=P_q^*\\]</span></span><span class='why'>u_j 和 p_j 是实变量，因此 Fourier 分量有共轭关系。</span>"
          ],
          "notes": [
            "这里的 q 是晶格中的波矢，不是电荷。人类符号冲突，宇宙表示无奈。"
          ],
          "exam": "先写实空间 H，再 Fourier。"
        },
        {
          "title": "02 势能项对角化",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[u_{j+1}-u_j=\\frac1{\\sqrt N}\\sum_q Q_q e^{iqja}(e^{iqa}-1)\\]</span></span><span class='why'>相邻位移差。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[\\sum_j e^{i(q+q^\\prime)ja}=N\\delta_{q+q^\\prime,0}\\]</span></span><span class='why'>利用离散正交关系。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[|e^{iqa}-1|^2=(e^{iqa}-1)(e^{-iqa}-1)=2-2\\cos qa=4\\sin^2\\frac{qa}{2}\\]</span></span><span class='why'>把差分因子化成正实数。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[V=\\frac12\\sum_q M\\omega_q^2 Q_qQ_{-q}\\]</span></span><span class='why'>势能变成各 q 模式相互独立。</span>",
            "<span class='eq'><span class='mini'>2.5</span><span class='math-tex'>\\[\\omega_q=2\\sqrt{\\frac KM}\\left|\\sin\\frac{qa}{2}\\right|\\]</span></span><span class='why'>一维单原子链色散关系。</span>"
          ],
          "notes": [
            "长波极限 qa≪1 时，ω≈v_s|q|，其中 v_s=a√(K/M)。"
          ],
          "exam": "重点是 |e^{iqa}-1|²。"
        },
        {
          "title": "03 正则坐标形式",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[T=\\sum_j\\frac{p_j^2}{2M}=\\sum_q\\frac{P_qP_{-q}}{2M}\\]</span></span><span class='why'>动能也被 Fourier 正交关系对角化。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[H=\\sum_q\\left[\\frac{P_qP_{-q}}{2M}+\\frac12M\\omega_q^2Q_qQ_{-q}\\right]\\]</span></span><span class='why'>每个 q 模式就是一个谐振子。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[[Q_q,P_{q^\\prime}]=i\\hbar\\delta_{q+q^\\prime,0}\\]</span></span><span class='why'>量子化时正则变量满足对易关系。</span>"
          ],
          "notes": [
            "声子不是小球，是晶格简谐振动模式的量子。"
          ],
          "exam": "H 要化成一堆谐振子。"
        },
        {
          "title": "04 产生湮灭算符为什么这样定义",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[a_q=\\sqrt{\\frac{M\\omega_q}{2\\hbar}}Q_q+\\frac{i}{\\sqrt{2M\\hbar\\omega_q}}P_{-q}\\]</span></span><span class='why'>把坐标和动量按无量纲组合定义湮灭算符。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[a_q^\\dagger=\\sqrt{\\frac{M\\omega_q}{2\\hbar}}Q_{-q}-\\frac{i}{\\sqrt{2M\\hbar\\omega_q}}P_q\\]</span></span><span class='why'>共轭给产生算符。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[[a_q,a_{q^\\prime}^\\dagger]=\\delta_{q,q^\\prime}\\]</span></span><span class='why'>系数被选成这样，是为了满足标准玻色对易关系。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[Q_q=\\sqrt{\\frac{\\hbar}{2M\\omega_q}}(a_q+a_{-q}^\\dagger)\\]</span></span><span class='why'>反解坐标。</span>",
            "<span class='eq'><span class='mini'>4.5</span><span class='math-tex'>\\[P_q=-i\\sqrt{\\frac{M\\hbar\\omega_q}{2}}(a_{-q}-a_q^\\dagger)\\]</span></span><span class='why'>反解动量。</span>"
          ],
          "notes": [
            "这不是凭空设，目标是把 H 写成标准谐振子，同时保证对易关系正确。"
          ],
          "exam": "要能解释“为什么这样定义”。"
        },
        {
          "title": "05 声子 Hamiltonian",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[\\hat H=\\sum_q\\hbar\\omega_q\\left(a_q^\\dagger a_q+\\frac12\\right)\\]</span></span><span class='why'>完成量子化后的声子 Hamiltonian。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[n_q=a_q^\\dagger a_q=0,1,2,\\cdots\\]</span></span><span class='why'>每个声子模式是玻色子占据数。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[E_{\\{n_q\\}}=\\sum_q\\hbar\\omega_q\\left(n_q+\\frac12\\right)\\]</span></span><span class='why'>能量本征值。</span>"
          ],
          "notes": [
            "声子数不是守恒粒子数，因此声子化学势为 0。"
          ],
          "exam": "最后必须写 H 的谐振子形式。"
        },
        {
          "title": "06 Debye 热容",
          "formulas": [
            "<span class='eq'><span class='mini'>6.1</span><span class='math-tex'>\\[g(\\omega)=\\frac{V}{2\\pi^2v_s^3}\\omega^2\\]</span></span><span class='why'>三维线性色散 ω=v_s k 给出声子态密度。</span>",
            "<span class='eq'><span class='mini'>6.2</span><span class='math-tex'>\\[\\int_0^{\\omega_D}g(\\omega)d\\omega=3N\\]</span></span><span class='why'>Debye 截止频率由总声学支模式数 3N 决定。</span>",
            "<span class='eq'><span class='mini'>6.3</span><span class='math-tex'>\\[U=\\int_0^{\\omega_D}d\\omega\\,g(\\omega)\\frac{\\hbar\\omega}{e^{\\beta\\hbar\\omega}-1}\\]</span></span><span class='why'>零点能不贡献热容，可去掉。</span>",
            "<span class='eq'><span class='mini'>6.4</span><span class='math-tex'>\\[C_V\\propto T^3\\quad(T\\ll \\Theta_D)\\]</span></span><span class='why'>低温 Debye T³ 定律。</span>",
            "<span class='eq'><span class='mini'>6.5</span><span class='math-tex'>\\[C_V\\to 3Nk_B\\quad(T\\gg \\Theta_D)\\]</span></span><span class='why'>高温回到 Dulong-Petit 极限。</span>"
          ],
          "notes": [
            "Debye 模型假定低能声子线性色散、连续介质、用一个球形截止替代真实布里渊区。"
          ],
          "exam": "注意写 Debye 模型的假设和局限。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "emfield",
      "label": "电磁场量子化、黑体辐射与相干态",
      "exam": "考试要求10-12",
      "summary": "按考试要求的微元法路线：库伦规范 → 离散化 → 谐振子 → 光子 Hamiltonian → Planck 分布 → 相干态。",
      "core": "\\hat H=\\sum_{\\mathbf k\\lambda}\\hbar\\omega_k(a_{\\mathbf k\\lambda}^\\dagger a_{\\mathbf k\\lambda}+1/2)",
      "steps": [
        {
          "title": "01 库伦规范与场变量",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[\\nabla\\cdot\\mathbf A=0\\]</span></span><span class='why'>库伦规范条件，只保留横向自由度。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[\\mathbf B=\\nabla\\times\\mathbf A\\]</span></span><span class='why'>磁场由矢势旋度给出。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\mathbf E=-\\frac{\\partial\\mathbf A}{\\partial t}\\]</span></span><span class='why'>无自由电荷辐射场中可取标势为零。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[H=\\frac12\\int d^3r\\left(\\epsilon_0\\mathbf E^2+\\frac1{\\mu_0}\\mathbf B^2\\right)\\]</span></span><span class='why'>电磁场能量就是 Hamiltonian。</span>"
          ],
          "notes": [
            "考试要求明确说先从电磁场能量表达式出发。"
          ],
          "exam": "先写库伦规范下 E、B、A 的关系。"
        },
        {
          "title": "02 模展开",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[\\mathbf A(\\mathbf r,t)=\\sum_{\\mathbf k,\\lambda}q_{\\mathbf k\\lambda}(t)\\,\\mathbf e_{\\mathbf k\\lambda}\\,e^{i\\mathbf k\\cdot\\mathbf r}\\]</span></span><span class='why'>把场分解成平面波模式。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[\\mathbf k\\cdot\\mathbf e_{\\mathbf k\\lambda}=0\\]</span></span><span class='why'>横向偏振，来自库伦规范。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[\\omega_k=c|\\mathbf k|\\]</span></span><span class='why'>自由电磁波色散。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[H=\\sum_{\\mathbf k\\lambda}\\left[\\frac12p_{\\mathbf k\\lambda}^2+\\frac12\\omega_k^2q_{\\mathbf k\\lambda}^2\\right]\\]</span></span><span class='why'>离散化/模展开后，每个模式都是一个简谐振子。</span>"
          ],
          "notes": [
            "这一步和一维原子链完全同构，怪不得老师要求你“直接利用声子结果”。"
          ],
          "exam": "把场 Hamiltonian 写成谐振子和。"
        },
        {
          "title": "03 光子产生湮灭算符",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[a_{\\mathbf k\\lambda}=\\sqrt{\\frac{\\omega_k}{2\\hbar}}q_{\\mathbf k\\lambda}+\\frac{i}{\\sqrt{2\\hbar\\omega_k}}p_{\\mathbf k\\lambda}\\]</span></span><span class='why'>定义湮灭算符。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[[a_{\\mathbf k\\lambda},a_{\\mathbf k^\\prime\\lambda^\\prime}^\\dagger]=\\delta_{\\mathbf k\\mathbf k^\\prime}\\delta_{\\lambda\\lambda^\\prime}\\]</span></span><span class='why'>标准玻色对易关系。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\hat H=\\sum_{\\mathbf k\\lambda}\\hbar\\omega_k\\left(a_{\\mathbf k\\lambda}^\\dagger a_{\\mathbf k\\lambda}+\\frac12\\right)\\]</span></span><span class='why'>电磁场量子化后就是光子模式的谐振子和。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[n_{\\mathbf k\\lambda}=a_{\\mathbf k\\lambda}^\\dagger a_{\\mathbf k\\lambda}\\]</span></span><span class='why'>光子数算符。</span>"
          ],
          "notes": [
            "光子也是玻色量子，但光子数不守恒，所以平衡黑体辐射中 μ=0。"
          ],
          "exam": "最后写光子 Hamiltonian。"
        },
        {
          "title": "04 黑体辐射基本计算",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[\\bar n(\\omega)=\\frac1{e^{\\beta\\hbar\\omega}-1}\\]</span></span><span class='why'>光子化学势为 0 的 Bose 分布。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[g(\\omega)d\\omega=\\frac{V}{\\pi^2c^3}\\omega^2d\\omega\\]</span></span><span class='why'>电磁场包含两个横向偏振，因此态密度有偏振因子 2。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[u(\\omega)d\\omega=\\frac{\\hbar\\omega^3}{\\pi^2c^3}\\frac{d\\omega}{e^{\\beta\\hbar\\omega}-1}\\]</span></span><span class='why'>单位体积单位频率能量密度。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[u=aT^4\\]</span></span><span class='why'>积分得到 Stefan-Boltzmann 的 T^4 标度。</span>"
          ],
          "notes": [
            "黑体辐射就是 μ=0 的光子玻色气体。"
          ],
          "exam": "掌握 Planck 谱的来源。"
        },
        {
          "title": "05 相干态定义",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[a|\\alpha\\rangle=\\alpha|\\alpha\\rangle\\]</span></span><span class='why'>相干态是湮灭算符的本征态。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[|\\alpha\\rangle=e^{-|\\alpha|^2/2}\\sum_{n=0}^{\\infty}\\frac{\\alpha^n}{\\sqrt{n!}}|n\\rangle\\]</span></span><span class='why'>在数态基底下展开。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[P(n)=|\\langle n|\\alpha\\rangle|^2=e^{-|\\alpha|^2}\\frac{|\\alpha|^{2n}}{n!}\\]</span></span><span class='why'>光子数服从 Poisson 分布。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[\\langle n\\rangle=|\\alpha|^2,\\quad \\Delta n=|\\alpha|\\]</span></span><span class='why'>相对涨落 Δn/⟨n⟩=1/|α|，大振幅时趋近经典场。</span>"
          ],
          "notes": [
            "“相干态对应经典振动”的数学原因是场平均值按经典方程振荡，且大光子数时相对涨落小。"
          ],
          "exam": "会写 |α⟩ 展开式。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "bec",
      "label": "理想 Bose 气与 BEC 临界温度",
      "exam": "考试要求13 / 真题二维无 BEC",
      "summary": "从 Bose 分布的粒子数方程推出临界温度、凝聚分数，并说明二维均匀理想 Bose 气为何无有限温 BEC。",
      "core": "T_c=\frac{2\\pi\\hbar^2}{mk_B}\\left(\frac{n}{\\zeta(3/2)}\right)^{2/3}",
      "steps": [
        {
          "title": "01 Bose 粒子数方程",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[N=N_0+N_{ex}\\]</span></span><span class='why'>总粒子数分成基态粒子数和激发态粒子数。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[N_{ex}=\\int_0^\\infty d\\epsilon\\,g(\\epsilon)\\frac1{e^{\\beta(\\epsilon-\\mu)}-1}\\]</span></span><span class='why'>激发态粒子数由 Bose 分布积分。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[\\mu\\le \\epsilon_0\\]</span></span><span class='why'>Bose 分布要求化学势不超过最低能级。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[T\\downarrow\\quad\\Rightarrow\\quad \\mu\\to\\epsilon_0\\]</span></span><span class='why'>降温时化学势上升到基态能量。</span>"
          ],
          "notes": [
            "通常把 ε0 取为 0，于是 μ≤0。"
          ],
          "exam": "粒子数方程要分 N0 和 Nex。"
        },
        {
          "title": "02 三维临界温度",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[\\epsilon_0=0,\\quad \\mu(T_c)=0\\]</span></span><span class='why'>临界点处激发态容纳粒子数达到最大。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[N=N_{ex}^{max}=\\int_0^\\infty d\\epsilon\\,g(\\epsilon)\\frac1{e^{\\beta_c\\epsilon}-1}\\]</span></span><span class='why'>Tc 时尚无宏观基态占据，所有粒子刚好由激发态容纳。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[g(\\epsilon)=\\frac{V}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt\\epsilon\\]</span></span><span class='why'>三维自由粒子 DOS。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[n=\\frac{N}{V}=\\frac{\\zeta(3/2)}{\\lambda_{T_c}^3}\\]</span></span><span class='why'>积分得到 ζ(3/2)。</span>",
            "<span class='eq'><span class='mini'>2.5</span><span class='math-tex'>\\[T_c=\\frac{2\\pi\\hbar^2}{mk_B}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}\\]</span></span><span class='why'>解出临界温度。</span>"
          ],
          "notes": [
            "这一推导结构考试很爱抽：DOS + Bose 积分 + μ=0。"
          ],
          "exam": "会算 Tc。"
        },
        {
          "title": "03 凝聚分数",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[N_{ex}(T)=V\\frac{\\zeta(3/2)}{\\lambda_T^3}\\]</span></span><span class='why'>T<Tc 时 μ 固定为 0，激发态粒子数随 T^{3/2}。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[\\frac{N_{ex}(T)}{N}=\\left(\\frac{T}{T_c}\\right)^{3/2}\\]</span></span><span class='why'>与临界点比较。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\frac{N_0}{N}=1-\\left(\\frac{T}{T_c}\\right)^{3/2}\\]</span></span><span class='why'>基态宏观占据的比例。</span>"
          ],
          "notes": [
            "BEC 不是粒子间吸引造成的，而是 Bose 统计和有限激发态容量共同造成的。"
          ],
          "exam": "凝聚分数是标准结论。"
        },
        {
          "title": "04 二维均匀理想 Bose 气无有限温 BEC",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[g_{2D}(\\epsilon)=\\frac{mA}{2\\pi\\hbar^2}\\]</span></span><span class='why'>二维自由粒子 DOS 为常数。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[N_{ex}=g_{2D}\\int_0^\\infty\\frac{d\\epsilon}{e^{\\beta\\epsilon}-1}\\]</span></span><span class='why'>临界时 μ→0。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[\\frac1{e^{\\beta\\epsilon}-1}\\sim\\frac1{\\beta\\epsilon}\\quad(\\epsilon\\to0)\\]</span></span><span class='why'>低能处积分发散。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[\\int_0\\frac{d\\epsilon}{\\epsilon}\\to\\infty\\]</span></span><span class='why'>激发态可容纳无限多粒子，所以不会被“填满”。</span>",
            "<span class='eq'><span class='mini'>4.5</span><span class='math-tex'>\\[T_c=0\\quad\\text{for uniform ideal 2D Bose gas}\\]</span></span><span class='why'>因此有限温下无真正 BEC。</span>"
          ],
          "notes": [
            "这是高等统计物理真题中非常典型的证明题。"
          ],
          "exam": "用低能发散证明。"
        },
        {
          "title": "05 BEC 为什么和相干态有关",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[\\hat\\psi(\\mathbf r)=\\phi_0(\\mathbf r)a_0+\\sum_{j\\ne0}\\phi_j(\\mathbf r)a_j\\]</span></span><span class='why'>场算符按单粒子模式展开。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[N_0=\\langle a_0^\\dagger a_0\\rangle=O(N)\\]</span></span><span class='why'>BEC 中基态占据为宏观量级。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[a_0\\sim \\sqrt{N_0}e^{i\\theta}\\]</span></span><span class='why'>宏观占据模式可近似为有确定相位的经典复振幅。</span>",
            "<span class='eq'><span class='mini'>5.4</span><span class='math-tex'>\\[\\langle\\hat\\psi(\\mathbf r)\\rangle\\approx \\sqrt{N_0}e^{i\\theta}\\phi_0(\\mathbf r)\\]</span></span><span class='why'>出现宏观波函数/序参量。</span>"
          ],
          "notes": [
            "严格粒子数固定态本身不是 a 的本征态，但热力学极限下可用相干态描述自发相位选择。"
          ],
          "exam": "别把“BEC=相干态”说得太粗糙。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "hubbard",
      "label": "Hubbard 平均场与自发铁磁",
      "exam": "考试要求14",
      "summary": "从 Hubbard Hamiltonian 到平均场分解、实空间到动量空间变换、自旋极化能带和自洽方程。",
      "core": "E_{k\\sigma}=\\epsilon_k+U\\langle n_{-\\sigma}\rangle",
      "steps": [
        {
          "title": "01 Hubbard 模型",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[H=-t\\sum_{\\langle ij\\rangle,\\sigma}(c_{i\\sigma}^\\dagger c_{j\\sigma}+h.c.)+U\\sum_i n_{i\\uparrow}n_{i\\downarrow}\\]</span></span><span class='why'>第一项为最近邻跃迁，第二项为同一格点双占据的库仑排斥。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[n_{i\\sigma}=c_{i\\sigma}^\\dagger c_{i\\sigma}\\]</span></span><span class='why'>格点 i、自旋 σ 的粒子数算符。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[U>0\\]</span></span><span class='why'>排斥相互作用。</span>"
          ],
          "notes": [
            "Hubbard 模型是最小化的“动能 vs 局域相互作用”模型。"
          ],
          "exam": "先写 Hamiltonian。"
        },
        {
          "title": "02 序参量与平均场近似",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[\\langle n_{i\\uparrow}\\rangle=n_\\uparrow,\\quad \\langle n_{i\\downarrow}\\rangle=n_\\downarrow\\]</span></span><span class='why'>均匀铁磁态假设。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[n=n_\\uparrow+n_\\downarrow,\\qquad m=n_\\uparrow-n_\\downarrow\\]</span></span><span class='why'>总密度和磁化序参量。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[n_{i\\uparrow}n_{i\\downarrow}\\approx n_{i\\uparrow}n_\\downarrow+n_\\uparrow n_{i\\downarrow}-n_\\uparrow n_\\downarrow\\]</span></span><span class='why'>忽略二阶涨落 δn_up δn_down。</span>",
            "<span class='eq'><span class='mini'>2.4</span><span class='math-tex'>\\[\\delta n_{i\\uparrow}\\delta n_{i\\downarrow}\\approx0\\]</span></span><span class='why'>平均场近似的本质。</span>"
          ],
          "notes": [
            "序参量不是装饰品，它是自发破缺相的宏观标志。"
          ],
          "exam": "会写平均场分解。"
        },
        {
          "title": "03 平均场 Hamiltonian",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[H_{MF}=-t\\sum_{\\langle ij\\rangle,\\sigma}(c_{i\\sigma}^\\dagger c_{j\\sigma}+h.c.)+U\\sum_i(n_\\downarrow n_{i\\uparrow}+n_\\uparrow n_{i\\downarrow})-UNn_\\uparrow n_\\downarrow\\]</span></span><span class='why'>代入平均场分解。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[c_{i\\sigma}=\\frac1{\\sqrt N}\\sum_k e^{i\\mathbf k\\cdot\\mathbf R_i}c_{k\\sigma}\\]</span></span><span class='why'>从实空间变到动量空间。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[-t\\sum_{\\langle ij\\rangle}c_{i\\sigma}^\\dagger c_{j\\sigma}=\\sum_k\\epsilon_k c_{k\\sigma}^\\dagger c_{k\\sigma}\\]</span></span><span class='why'>跃迁项在动量空间对角化。</span>",
            "<span class='eq'><span class='mini'>3.4</span><span class='math-tex'>\\[H_{MF}=\\sum_{k\\sigma}E_{k\\sigma}c_{k\\sigma}^\\dagger c_{k\\sigma}-UNn_\\uparrow n_\\downarrow\\]</span></span><span class='why'>得到单粒子平均场形式。</span>"
          ],
          "notes": [
            "平均场之后模型变成“自洽单粒子问题”。"
          ],
          "exam": "实空间到 k 空间变换必须会。"
        },
        {
          "title": "04 自旋极化能带",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[E_{k\\uparrow}=\\epsilon_k+Un_\\downarrow\\]</span></span><span class='why'>上自旋电子看到下自旋平均密度产生的排斥势。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[E_{k\\downarrow}=\\epsilon_k+Un_\\uparrow\\]</span></span><span class='why'>下自旋电子看到上自旋平均密度。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[E_{k\\uparrow}-E_{k\\downarrow}=U(n_\\downarrow-n_\\uparrow)=-Um\\]</span></span><span class='why'>磁化导致自旋能带劈裂。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[n_\\sigma=\\frac1N\\sum_k f(E_{k\\sigma}-\\mu)\\]</span></span><span class='why'>自洽方程：能带由 nσ 决定，nσ 又由能带占据决定。</span>"
          ],
          "notes": [
            "“自洽”就是这条闭环，不是算两遍就叫自洽。"
          ],
          "exam": "会写自旋极化能带和自洽方程。"
        },
        {
          "title": "05 Stoner 判据的物理图像",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[\\Delta E_{int}\\sim -\\frac{U}{4}m^2\\]</span></span><span class='why'>自旋极化减少双占据，降低相互作用能。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[\\Delta E_{kin}\\sim \\frac{m^2}{4D(E_F)}\\]</span></span><span class='why'>自旋极化使两种自旋的费米面错开，增加动能。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[UD(E_F)>1\\]</span></span><span class='why'>若相互作用能降低超过动能代价，顺磁态不稳定，形成铁磁。</span>"
          ],
          "notes": [
            "平均场铁磁本质是“少双占据”与“费米面重排动能代价”的竞争。"
          ],
          "exam": "定性理解 Stoner 判据。"
        }
      ]
    }
  ],
  [
    "quantum",
    {
      "id": "hf-bcs",
      "label": "Hartree-Fock 与 BCS 超导完整链条",
      "exam": "考试要求15-16",
      "summary": "先把库仑四费米项做 Hartree/Fock 平均场，再进入 Cooper 不稳定、BCS 平均场、Bogoliubov 对角化和 BCS 基态。",
      "core": "BCS 基态：Π_k(u_k+v_k pair†)|0⟩",
      "steps": [
        {
          "title": "01 两体相互作用的二次量子化",
          "formulas": [
            "<span class='eq'><span class='mini'>1.1</span><span class='math-tex'>\\[H_{int}=\\frac12\\int d\\mathbf r d\\mathbf r^\\prime\\,\\hat\\psi^\\dagger(\\mathbf r)\\hat\\psi^\\dagger(\\mathbf r^\\prime)V(\\mathbf r-\\mathbf r^\\prime)\\hat\\psi(\\mathbf r^\\prime)\\hat\\psi(\\mathbf r)\\]</span></span><span class='why'>一般两体相互作用。</span>",
            "<span class='eq'><span class='mini'>1.2</span><span class='math-tex'>\\[\\hat\\psi(\\mathbf r)=\\sum_i\\phi_i(\\mathbf r)c_i\\]</span></span><span class='why'>把场算符按单粒子基展开。</span>",
            "<span class='eq'><span class='mini'>1.3</span><span class='math-tex'>\\[H_{int}=\\frac12\\sum_{ijkl}V_{ij;kl}c_i^\\dagger c_j^\\dagger c_l c_k\\]</span></span><span class='why'>得到四费米算符形式。</span>",
            "<span class='eq'><span class='mini'>1.4</span><span class='math-tex'>\\[V_{ij;kl}=\\int d\\mathbf r d\\mathbf r^\\prime\\phi_i^*(\\mathbf r)\\phi_j^*(\\mathbf r^\\prime)V(\\mathbf r-\\mathbf r^\\prime)\\phi_k(\\mathbf r)\\phi_l(\\mathbf r^\\prime)\\]</span></span><span class='why'>矩阵元定义。</span>"
          ],
          "notes": [
            "Hartree-Fock 的起点是四算符相互作用项。"
          ],
          "exam": "会写库仑相互作用二次量子化。"
        },
        {
          "title": "02 Hartree 项",
          "formulas": [
            "<span class='eq'><span class='mini'>2.1</span><span class='math-tex'>\\[c_i^\\dagger c_j^\\dagger c_l c_k\\to \\langle c_j^\\dagger c_l\\rangle c_i^\\dagger c_k\\]</span></span><span class='why'>直接收缩给 Hartree 平均场。</span>",
            "<span class='eq'><span class='mini'>2.2</span><span class='math-tex'>\\[V_H(\\mathbf r)=\\int d\\mathbf r^\\prime V(\\mathbf r-\\mathbf r^\\prime)n(\\mathbf r^\\prime)\\]</span></span><span class='why'>每个粒子在平均电荷密度产生的势中运动。</span>",
            "<span class='eq'><span class='mini'>2.3</span><span class='math-tex'>\\[H_H=\\int d\\mathbf r\\,\\hat\\psi^\\dagger(\\mathbf r)V_H(\\mathbf r)\\hat\\psi(\\mathbf r)\\]</span></span><span class='why'>Hartree 单粒子 Hamiltonian。</span>"
          ],
          "notes": [
            "Hartree 是“直接项”，最像经典平均静电势。"
          ],
          "exam": "会说明 Hartree 的物理含义。"
        },
        {
          "title": "03 Fock 交换项",
          "formulas": [
            "<span class='eq'><span class='mini'>3.1</span><span class='math-tex'>\\[c_i^\\dagger c_j^\\dagger c_l c_k\\to -\\langle c_j^\\dagger c_k\\rangle c_i^\\dagger c_l\\]</span></span><span class='why'>交换收缩带负号，来自费米反对易关系。</span>",
            "<span class='eq'><span class='mini'>3.2</span><span class='math-tex'>\\[H_F=-\\sum_{il}\\left(\\sum_{jk}V_{ij;kl}\\langle c_j^\\dagger c_k\\rangle\\right)c_i^\\dagger c_l\\]</span></span><span class='why'>Fock 项一般是非局域的。</span>",
            "<span class='eq'><span class='mini'>3.3</span><span class='math-tex'>\\[\\Sigma_F(\\mathbf r,\\mathbf r^\\prime)=-V(\\mathbf r-\\mathbf r^\\prime)\\rho(\\mathbf r,\\mathbf r^\\prime)\\]</span></span><span class='why'>交换自能与单粒子密度矩阵相关。</span>"
          ],
          "notes": [
            "Fock 不是经典平均电势，它是全同费米子的交换效应。"
          ],
          "exam": "直接项与交换项要分清。"
        },
        {
          "title": "04 Cooper 不稳定",
          "formulas": [
            "<span class='eq'><span class='mini'>4.1</span><span class='math-tex'>\\[|\\Psi\\rangle=\\sum_{k>k_F}a_k c_{k\\uparrow}^\\dagger c_{-k\\downarrow}^\\dagger|F\\rangle\\]</span></span><span class='why'>在填满的费米海上加一对总动量为零的电子。</span>",
            "<span class='eq'><span class='mini'>4.2</span><span class='math-tex'>\\[(2\\xi_k-E)a_k=-\\sum_{k^\\prime}V_{kk^\\prime}a_{k^\\prime}\\]</span></span><span class='why'>两电子 Schrödinger 方程投影到配对态。</span>",
            "<span class='eq'><span class='mini'>4.3</span><span class='math-tex'>\\[1=|V|\\sum_{0<\\xi_k<\\hbar\\omega_D}\\frac1{2\\xi_k-E}\\]</span></span><span class='why'>取壳层内常数吸引 V<0。</span>",
            "<span class='eq'><span class='mini'>4.4</span><span class='math-tex'>\\[1=|V|D(E_F)\\int_0^{\\hbar\\omega_D}\\frac{d\\xi}{2\\xi+|E|}\\]</span></span><span class='why'>用费米面附近常数态密度。</span>",
            "<span class='eq'><span class='mini'>4.5</span><span class='math-tex'>\\[|E|\\sim2\\hbar\\omega_D e^{-2/[|V|D(E_F)]}\\]</span></span><span class='why'>任意弱吸引都有束缚解。</span>"
          ],
          "notes": [
            "重点是对数发散让任意弱吸引都不稳定，不是吸引很强才配对。"
          ],
          "exam": "Cooper 问题必须写积分对数。"
        },
        {
          "title": "05 BCS 平均场 Hamiltonian",
          "formulas": [
            "<span class='eq'><span class='mini'>5.1</span><span class='math-tex'>\\[H_{BCS}=\\sum_{k\\sigma}\\xi_k c_{k\\sigma}^\\dagger c_{k\\sigma}-\\sum_{kk^\\prime}V_{kk^\\prime}c_{k\\uparrow}^\\dagger c_{-k\\downarrow}^\\dagger c_{-k^\\prime\\downarrow}c_{k^\\prime\\uparrow}\\]</span></span><span class='why'>BCS 只保留时间反演配对散射。</span>",
            "<span class='eq'><span class='mini'>5.2</span><span class='math-tex'>\\[\\Delta_k=-\\sum_{k^\\prime}V_{kk^\\prime}\\langle c_{-k^\\prime\\downarrow}c_{k^\\prime\\uparrow}\\rangle\\]</span></span><span class='why'>定义超导序参量/能隙函数。</span>",
            "<span class='eq'><span class='mini'>5.3</span><span class='math-tex'>\\[H_{MF}=\\sum_k\\left[\\xi_k(c_{k\\uparrow}^\\dagger c_{k\\uparrow}+c_{-k\\downarrow}^\\dagger c_{-k\\downarrow})-\\Delta_k c_{k\\uparrow}^\\dagger c_{-k\\downarrow}^\\dagger-\\Delta_k^* c_{-k\\downarrow}c_{k\\uparrow}\\right]+\\mathrm{const}\\]</span></span><span class='why'>四费米项被配对平均场化。</span>"
          ],
          "notes": [
            "Δ 是反常平均值，不是普通密度平均。"
          ],
          "exam": "BCS 平均场要写 Δ 的定义。"
        },
        {
          "title": "06 Bogoliubov 变换",
          "formulas": [
            "<span class='eq'><span class='mini'>6.1</span><span class='math-tex'>\\[\\gamma_{k\\uparrow}=u_k c_{k\\uparrow}-v_k c_{-k\\downarrow}^\\dagger\\]</span></span><span class='why'>定义准粒子算符。</span>",
            "<span class='eq'><span class='mini'>6.2</span><span class='math-tex'>\\[\\gamma_{-k\\downarrow}=u_k c_{-k\\downarrow}+v_k c_{k\\uparrow}^\\dagger\\]</span></span><span class='why'>粒子和空穴混合。</span>",
            "<span class='eq'><span class='mini'>6.3</span><span class='math-tex'>\\[u_k^2+v_k^2=1\\]</span></span><span class='why'>保证变换保持费米反对易关系。</span>",
            "<span class='eq'><span class='mini'>6.4</span><span class='math-tex'>\\[E_k=\\sqrt{\\xi_k^2+|\\Delta_k|^2}\\]</span></span><span class='why'>对角化后的 Bogoliubov 准粒子能谱。</span>",
            "<span class='eq'><span class='mini'>6.5</span><span class='math-tex'>\\[u_k^2=\\frac12\\left(1+\\frac{\\xi_k}{E_k}\\right),\\quad v_k^2=\\frac12\\left(1-\\frac{\\xi_k}{E_k}\\right)\\]</span></span><span class='why'>相干因子。</span>"
          ],
          "notes": [
            "能隙来自谱 E_k 的最小值 |Δ|。"
          ],
          "exam": "会写变换和准粒子谱。"
        },
        {
          "title": "07 BCS 基态是准粒子真空",
          "formulas": [
            "<span class='eq'><span class='mini'>7.1</span><span class='math-tex'>\\[BCS 基态：Π_k(u_k+v_k pair†)|0⟩\\]</span></span><span class='why'>BCS 变分基态。</span>",
            "<span class='eq'><span class='mini'>7.2</span><span class='math-tex'>\\[\\gamma_{k\\uparrow}|BCS\\rangle=0,\\quad \\gamma_{-k\\downarrow}|BCS\\rangle=0\\]</span></span><span class='why'>对每个 k 对都可直接代入验证。</span>",
            "<span class='eq'><span class='mini'>7.3</span><span class='math-tex'>\\[\\frac{v_k}{u_k}=\\frac{\\Delta}{E_k+\\xi_k}\\]</span></span><span class='why'>由准粒子真空条件得到 u、v 比值。</span>",
            "<span class='eq'><span class='mini'>7.4</span><span class='math-tex'>\\[\\Delta=-\\sum_{k^\\prime}V_{kk^\\prime}\\frac{\\Delta_{k^\\prime}}{2E_{k^\\prime}}\\tanh\\frac{\\beta E_{k^\\prime}}{2}\\]</span></span><span class='why'>自洽能隙方程。</span>"
          ],
          "notes": [
            "考试要求能证明准粒子真空态就是 BCS 基态，至少要会用 γ|BCS⟩=0 这条。"
          ],
          "exam": "写出 BCS 基态乘积形式。"
        }
      ]
    }
  ]
];
  updates.forEach(([sectionId, topic]) => setTopic(sectionId, topic));
})();
