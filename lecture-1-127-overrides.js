(function () {
  const DATA = window.EXPANDED_DATA || [];
  const T = (id, label, exam, summary, core, steps) => ({ id, label, exam, summary, core, steps });
  const S = (title, formulas, notes, exam) => ({ title, formulas, notes, exam });
  const E = (n, eq, why) => `<span class='eq'><span class='mini'>${n}</span>${eq}</span><span class='why'>${why}</span>`;
  const X = (n, tex, why) => E(n, `<span class='math-tex'>\\[${tex}\\]</span>`, why);
  const findSection = (id) => DATA.find((x) => x.id === id);
  const setTopic = (sectionId, topicId, topic) => {
    const sec = findSection(sectionId);
    if (!sec) return;
    const i = sec.topics.findIndex((x) => x.id === topicId);
    if (i >= 0) sec.topics[i] = { ...sec.topics[i], ...topic };
    else sec.topics.push(topic);
  };

  setTopic("ensemble", "entropy", T("entropy", "讲义1-18页：统计假设、Gibbs 熵与微正则系综", "讲义1-18页 / 考试要求1-2", "补充统计系综、等概率假设、Gibbs 熵、Boltzmann 熵和微正则热力学量定义。", "S=k_B\\ln\\Omega", [
    S("01 系综平均", [
      X("1.1", String.raw`\Gamma=(q_1,\cdots,q_{3N};p_1,\cdots,p_{3N})`, "经典多粒子系统的微观态是相空间中的一点。"),
      X("1.2", String.raw`\rho(\Gamma,t)d\Gamma`, "表示系统处在相空间体元 dΓ 中的概率。"),
      X("1.3", String.raw`\langle A\rangle=\int d\Gamma\,\rho(\Gamma,t)A(\Gamma)`, "宏观量由大量微观态按概率加权平均。"),
      X("1.4", String.raw`\int d\Gamma\,\rho(\Gamma,t)=1`, "概率分布需要归一化。"),
      X("1.5", String.raw`\overline A_{\rm time}\simeq \langle A\rangle_{\rm ensemble}`, "平衡态中用系综平均代替长时间平均。")
    ], ["讲义开头的核心是从确定轨道转向概率分布。"], "说明系综平均的意义。"),
    S("02 微正则分布", [
      X("2.1", String.raw`E\le H(\Gamma)\le E+\Delta E`, "孤立系统的微观态位于能量壳内。"),
      X("2.2", String.raw`\rho(\Gamma)=\frac{1}{\Omega(E,V,N)}`, "等概率原理：能量壳内所有可达态等概率。"),
      X("2.3", String.raw`\Omega(E,V,N)=\frac1{h^{3N}N!}\int_{E<H<E+\Delta E}d^{3N}q\,d^{3N}p`, "Ω 是能量壳内态数；h^{3N} 来自相空间量子化，N! 来自全同粒子不可分辨。"),
      X("2.4", String.raw`S=k_B\ln\Omega`, "Boltzmann 熵把微观态数和宏观熵联系起来。")
    ], ["微正则是其他系综的出发点。"], "必写 Ω 的相空间积分。"),
    S("03 Gibbs 熵退化为 Boltzmann 熵", [
      X("3.1", String.raw`S_G=-k_B\sum_i p_i\ln p_i`, "Gibbs 熵适用于任意概率分布。"),
      X("3.2", String.raw`p_i=\frac1W`, "若 W 个微观态等概率。"),
      X("3.3", String.raw`S_G=-k_B W\frac1W\ln\frac1W`, "代入 Gibbs 熵。"),
      X("3.4", String.raw`S_G=k_B\ln W`, "得到 Boltzmann 熵。")
    ], ["Boltzmann 熵是 Gibbs 熵的等概率特例。"], "会解释两种熵关系。"),
    S("04 熵偏导定义热力学量", [
      X("4.1", String.raw`dS=\left(\frac{\partial S}{\partial E}\right)_{V,N}dE+\left(\frac{\partial S}{\partial V}\right)_{E,N}dV+\left(\frac{\partial S}{\partial N}\right)_{E,V}dN`, "把 S 看作 E,V,N 的函数并全微分。"),
      X("4.2", String.raw`dE=T\,dS-P\,dV+\mu\,dN`, "热力学基本关系。"),
      X("4.3", String.raw`dS=\frac1T dE+\frac PTdV-\frac\mu T dN`, "解出 dS 后比较系数。"),
      X("4.4", String.raw`\frac1T=\left(\frac{\partial S}{\partial E}\right)_{V,N}`, "温度的统计定义。"),
      X("4.5", String.raw`\frac PT=\left(\frac{\partial S}{\partial V}\right)_{E,N}`, "压强的统计定义。"),
      X("4.6", String.raw`-\frac\mu T=\left(\frac{\partial S}{\partial N}\right)_{E,V}`, "化学势的统计定义。")
    ], ["这一步把微正则熵接回热力学。"], "从全微分比较系数。")
  ]));

  setTopic("ensemble", "canonical", T("canonical", "讲义19-55页：正则、巨正则与涨落", "讲义19-55页 / 考试要求3-5", "补充热库推导正则分布、自由能、能量涨落、巨正则分布和粒子数涨落。", "F=-k_BT\\ln Z，\\Omega_G=-k_BT\\ln\\Xi", [
    S("01 热库推出正则分布", [
      X("1.1", String.raw`E_{\rm tot}=E_s+E_b`, "小系统和热库组成孤立复合系统。"),
      X("1.2", String.raw`P_s(i)\propto\Omega_b(E_{\rm tot}-E_i)`, "小系统处于能级 Ei 的概率正比于热库剩余态数。"),
      X("1.3", String.raw`\ln\Omega_b(E_{\rm tot}-E_i)\simeq\ln\Omega_b(E_{\rm tot})-\frac{E_i}{k_BT}`, "热库很大，对 Ei 做一阶展开。"),
      X("1.4", String.raw`P_s(i)=\frac{e^{-\beta E_i}}{Z}`, "得到 Boltzmann 权重。"),
      X("1.5", String.raw`Z=\sum_i e^{-\beta E_i}`, "归一化常数就是正则配分函数。")
    ], ["正则分布的来源是热库态数的一阶展开。"], "从热库推导 Boltzmann 因子。"),
    S("02 Z 推出热力学量", [
      X("2.1", String.raw`F=-k_BT\ln Z`, "Helmholtz 自由能是正则系综特性函数。"),
      X("2.2", String.raw`U=\langle E\rangle=\frac1Z\sum_i E_i e^{-\beta E_i}`, "能量按正则概率平均。"),
      X("2.3", String.raw`U=-\frac{\partial\ln Z}{\partial\beta}`, "对 lnZ 求导会带出 -Ei。"),
      X("2.4", String.raw`S=-\left(\frac{\partial F}{\partial T}\right)_{V,N}`, "自由能对温度导数给熵。"),
      X("2.5", String.raw`P=-\left(\frac{\partial F}{\partial V}\right)_{T,N}`, "自由能对体积导数给压强。")
    ], ["正则系综中所有热力学量都从 Z 来。"], "F、U、S、P。"),
    S("03 能量涨落", [
      X("3.1", String.raw`\frac{\partial U}{\partial\beta}=-\langle E^2\rangle+\langle E\rangle^2`, "从 U=-∂lnZ/∂β 再求导。"),
      X("3.2", String.raw`\langle(\Delta E)^2\rangle=\langle E^2\rangle-\langle E\rangle^2=-\frac{\partial U}{\partial\beta}`, "得到能量方差。"),
      X("3.3", String.raw`\frac{\partial}{\partial\beta}=-k_BT^2\frac{\partial}{\partial T}`, "由 β=1/kBT 得链式法则。"),
      X("3.4", String.raw`\langle(\Delta E)^2\rangle=k_BT^2C_V`, "能量涨落与热容相连。"),
      X("3.5", String.raw`\frac{\sqrt{\langle(\Delta E)^2\rangle}}{U}\sim N^{-1/2}`, "宏观系统相对涨落消失。")
    ], ["涨落公式说明正则和微正则在热力学极限等价。"], "能量涨落公式。"),
    S("04 巨正则分布", [
      X("4.1", String.raw`P(i,N)\propto\Omega_b(E_{\rm tot}-E_{iN},N_{\rm tot}-N)`, "系统同时和库交换能量、粒子。"),
      X("4.2", String.raw`S_b\simeq S_b^0-\frac{E_{iN}}T+\frac{\mu N}{T}`, "对热库熵按 E 和 N 展开。"),
      X("4.3", String.raw`P(i,N)=\frac{e^{-\beta(E_{iN}-\mu N)}}{\Xi}`, "得到巨正则概率。"),
      X("4.4", String.raw`\Xi=\sum_N\sum_i e^{-\beta(E_{iN}-\mu N)}`, "巨配分函数。"),
      X("4.5", String.raw`\Omega_G=-k_BT\ln\Xi=U-TS-\mu N`, "巨势定义。"),
      X("4.6", String.raw`\Omega_G=-PV`, "均匀体系中的巨势等于 -PV。")
    ], ["注意巨势 ΩG 和微正则态数 Ω 不同。"], "巨正则权重。"),
    S("05 粒子数涨落", [
      X("5.1", String.raw`\langle N\rangle=\frac1\beta\frac{\partial\ln\Xi}{\partial\mu}`, "对 μ 求导会带出 βN。"),
      X("5.2", String.raw`\langle(\Delta N)^2\rangle=\frac1{\beta^2}\frac{\partial^2\ln\Xi}{\partial\mu^2}`, "二阶导数给粒子数方差。"),
      X("5.3", String.raw`\langle(\Delta N)^2\rangle=k_BT\left(\frac{\partial N}{\partial\mu}\right)_{T,V}`, "粒子数涨落和化学势响应相连。")
    ], ["与能量涨落类比记忆。"], "巨正则涨落。")
  ]));

  setTopic("ensemble", "idealgas", T("idealgas", "讲义56-86页：经典理想气体与 Maxwell 分布", "讲义56-86页 / 考试要求6-8", "补充经典配分函数、Gibbs 修正、状态方程、Sackur-Tetrode 熵和 Maxwell 速度分布。", "Z_N=\\frac1{N!}(V/\\lambda_T^3)^N", [
    S("01 单粒子配分函数", [
      X("1.1", String.raw`Z_1=\frac1{h^3}\int d^3r\,d^3p\,e^{-\beta p^2/2m}`, "经典相空间积分。"),
      X("1.2", String.raw`\int d^3r=V`, "无外势理想气体的空间积分。"),
      X("1.3", String.raw`\int d^3p\,e^{-\beta p^2/2m}=(2\pi mk_BT)^{3/2}`, "三维 Gaussian 动量积分。"),
      X("1.4", String.raw`Z_1=\frac{V}{\lambda_T^3}`, "定义热波长后得到单粒子配分函数。"),
      X("1.5", String.raw`\lambda_T=\frac{h}{\sqrt{2\pi mk_BT}}`, "热德布罗意波长。")
    ], ["λT 是判断量子简并的核心长度。"], "单粒子配分函数。"),
    S("02 N 粒子配分函数", [
      X("2.1", String.raw`Z_N=\frac{Z_1^N}{N!}`, "全同粒子不可分辨，需要 Gibbs 修正。"),
      X("2.2", String.raw`Z_N=\frac1{N!}\left(\frac{V}{\lambda_T^3}\right)^N`, "代入 Z1。"),
      X("2.3", String.raw`\ln N!\simeq N\ln N-N`, "用 Stirling 公式。"),
      X("2.4", String.raw`F=-k_BT\ln Z_N=-Nk_BT\left[\ln\frac{V}{N\lambda_T^3}+1\right]`, "得到自由能。")
    ], ["N! 是解决 Gibbs 佯谬的关键。"], "Gibbs 修正。"),
    S("03 状态方程和能均分", [
      X("3.1", String.raw`P=-\left(\frac{\partial F}{\partial V}\right)_{T,N}`, "由自由能定义压强。"),
      X("3.2", String.raw`P=\frac{Nk_BT}{V}`, "得到理想气体状态方程。"),
      X("3.3", String.raw`U=-\frac{\partial\ln Z_N}{\partial\beta}`, "内能由配分函数求导。"),
      X("3.4", String.raw`Z_N\propto\beta^{-3N/2}`, "配分函数的 β 依赖来自动量积分。"),
      X("3.5", String.raw`U=\frac32Nk_BT`, "每个平动自由度贡献 kBT/2。")
    ], ["状态方程和内能都从 ZN 推出。"], "PV=NkBT，U=3NkBT/2。"),
    S("04 Sackur-Tetrode 熵与简并判据", [
      X("4.1", String.raw`S=-\left(\frac{\partial F}{\partial T}\right)_{V,N}`, "由自由能求熵。"),
      X("4.2", String.raw`S=Nk_B\left[\ln\frac{V}{N\lambda_T^3}+\frac52\right]`, "经典理想气体熵。"),
      X("4.3", String.raw`n\lambda_T^3\ll1`, "经典极限要求每个热波长体积内平均粒子数远小于 1。"),
      X("4.4", String.raw`n\lambda_T^3\gtrsim1`, "此时量子统计不可忽略。")
    ], ["这个判据连接到后面的 Fermi/Bose 气。"], "简并判据。"),
    S("05 Maxwell 速率分布", [
      X("5.1", String.raw`f(\mathbf v)=\left(\frac{m}{2\pi k_BT}\right)^{3/2}e^{-mv^2/2k_BT}`, "三维速度矢量分布。"),
      X("5.2", String.raw`P(v)dv=4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}e^{-mv^2/2k_BT}dv`, "乘速度空间球壳面积得到速率分布。"),
      X("5.3", String.raw`v_{\rm mp}=\sqrt{\frac{2k_BT}{m}}`, "最概然速率来自 dP/dv=0。"),
      X("5.4", String.raw`\bar v=\sqrt{\frac{8k_BT}{\pi m}},\qquad v_{\rm rms}=\sqrt{\frac{3k_BT}{m}}`, "平均速率和均方根速率由积分得到。")
    ], ["注意速度矢量分布和速率分布差一个 4πv²。"], "Maxwell 分布。")
  ]));

  setTopic("quantum", "fdbe", T("fdbe", "讲义88-99页：FD/BE 分布从占据数推导", "讲义88-99页 / 考试要求9-10", "补充 Maxwell-Boltzmann、Fermi-Dirac、Bose-Einstein 三种统计的组合数和极值推导。", "f=1/(e^{\\beta(\\epsilon-\\mu)}\\pm1)", [
    S("01 共同约束", [
      X("1.1", String.raw`\sum_i n_i=N`, "总粒子数固定。"),
      X("1.2", String.raw`\sum_i n_i\epsilon_i=E`, "总能量固定。"),
      X("1.3", String.raw`g_i`, "第 i 个能级组的简并度。")
    ], ["三种统计差别在组合数 W。"], "分布推导共同起点。"),
    S("02 Maxwell-Boltzmann", [
      X("2.1", String.raw`W_{\rm MB}=N!\prod_i\frac{g_i^{n_i}}{n_i!}`, "可分辨粒子的组合数。"),
      X("2.2", String.raw`\delta\left[\ln W-\alpha\sum_i n_i-\beta\sum_i n_i\epsilon_i\right]=0`, "最大化组合数并加入约束。"),
      X("2.3", String.raw`\ln\frac{g_i}{n_i}-\alpha-\beta\epsilon_i=0`, "对 ni 变分。"),
      X("2.4", String.raw`n_i=g_i e^{-\alpha-\beta\epsilon_i}`, "得到 Boltzmann 分布。")
    ], ["MB 适用于稀薄经典极限。"], "MB 统计。"),
    S("03 Fermi-Dirac", [
      X("3.1", String.raw`W_{\rm FD}=\prod_i\frac{g_i!}{n_i!(g_i-n_i)!}`, "gi 个态中选 ni 个，每态最多一个粒子。"),
      X("3.2", String.raw`\frac{\partial\ln W}{\partial n_i}=\ln\frac{g_i-n_i}{n_i}`, "Stirling 展开后求导。"),
      X("3.3", String.raw`n_i=\frac{g_i}{e^{\alpha+\beta\epsilon_i}+1}`, "得到 FD 占据数。"),
      X("3.4", String.raw`f_{\rm FD}(\epsilon)=\frac1{e^{\beta(\epsilon-\mu)}+1}`, "令 α=-βμ 得常用形式。")
    ], ["加号来自 Pauli 限制。"], "FD 分布。"),
    S("04 Bose-Einstein", [
      X("4.1", String.raw`W_{\rm BE}=\prod_i\frac{(n_i+g_i-1)!}{n_i!(g_i-1)!}`, "玻色子允许多重占据。"),
      X("4.2", String.raw`\frac{\partial\ln W}{\partial n_i}=\ln\frac{n_i+g_i}{n_i}`, "Stirling 展开后求导。"),
      X("4.3", String.raw`n_i=\frac{g_i}{e^{\alpha+\beta\epsilon_i}-1}`, "得到 BE 占据数。"),
      X("4.4", String.raw`f_{\rm BE}(\epsilon)=\frac1{e^{\beta(\epsilon-\mu)}-1}`, "常用形式。")
    ], ["减号来自玻色子可多重占据。"], "BE 分布。"),
    S("05 经典极限", [
      X("5.1", String.raw`e^{\beta(\epsilon-\mu)}\gg1`, "低密度或高温极限。"),
      X("5.2", String.raw`f_{\rm FD}\simeq e^{-\beta(\epsilon-\mu)}`, "FD 回到 Boltzmann。"),
      X("5.3", String.raw`f_{\rm BE}\simeq e^{-\beta(\epsilon-\mu)}`, "BE 也回到 Boltzmann。")
    ], ["量子统计在简并条件下才显著。"], "经典极限。")
  ]));

  setTopic("quantum", "fermi", T("fermi", "讲义100-115页：理想 Fermi 气完整推导", "讲义100-115页 / 考试要求11-12", "补充三维态密度、零温 Fermi 能、平均能、压强和低温热容。", "E_F=\\hbar^2(3\\pi^2n)^{2/3}/2m", [
    S("01 态密度", [
      X("1.1", String.raw`\epsilon=\frac{\hbar^2k^2}{2m}`, "自由粒子色散。"),
      X("1.2", String.raw`D(\epsilon)d\epsilon=g_s\frac{V}{(2\pi)^3}4\pi k^2dk`, "k 空间球壳数态。"),
      X("1.3", String.raw`D(\epsilon)=g_s\frac{V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\epsilon^{1/2}`, "换元到能量得到三维 DOS。")
    ], ["DOS 是所有 Fermi 积分的基础。"], "会推三维 DOS。"),
    S("02 Fermi 动量与 Fermi 能", [
      X("2.1", String.raw`N=2\frac{V}{(2\pi)^3}\frac{4\pi}{3}k_F^3`, "零温填满 k 空间 Fermi 球。"),
      X("2.2", String.raw`n=\frac{k_F^3}{3\pi^2}`, "化简粒子数密度。"),
      X("2.3", String.raw`k_F=(3\pi^2n)^{1/3}`, "Fermi 波矢。"),
      X("2.4", String.raw`E_F=\frac{\hbar^2k_F^2}{2m}=\frac{\hbar^2}{2m}(3\pi^2n)^{2/3}`, "Fermi 能。")
    ], ["电子自旋简并给因子 2。"], "Fermi 能。"),
    S("03 零温能量和压强", [
      X("3.1", String.raw`U=\int_0^{E_F}\epsilon D(\epsilon)d\epsilon`, "填满态的能量总和。"),
      X("3.2", String.raw`N=\int_0^{E_F}D(\epsilon)d\epsilon`, "粒子数积分。"),
      X("3.3", String.raw`\frac UN=\frac{\int_0^{E_F}\epsilon^{3/2}d\epsilon}{\int_0^{E_F}\epsilon^{1/2}d\epsilon}=\frac35E_F`, "平均能为 3/5 EF。"),
      X("3.4", String.raw`P=-\left(\frac{\partial U}{\partial V}\right)_N=\frac25nE_F`, "非相对论简并压强。"),
      X("3.5", String.raw`PV=\frac23U`, "状态方程。")
    ], ["3/5 和 2/5 要从积分和体积导数来。"], "零温 Fermi 气。"),
    S("04 Sommerfeld 低温结果", [
      X("4.1", String.raw`\int_0^\infty d\epsilon\,\phi(\epsilon)f(\epsilon)=\int_0^\mu\phi(\epsilon)d\epsilon+\frac{\pi^2}{6}(k_BT)^2\phi'(\mu)+O(T^4)`, "Sommerfeld 展开。"),
      X("4.2", String.raw`\mu(T)=E_F\left[1-\frac{\pi^2}{12}\left(\frac{k_BT}{E_F}\right)^2+\cdots\right]`, "固定 N 时化学势随 T 略降。"),
      X("4.3", String.raw`C_V=\frac{\pi^2}{2}Nk_B\frac{T}{T_F}`, "低温电子热容正比 T。")
    ], ["只有 Fermi 面附近 kBT 厚度内的粒子被激发。"], "Sommerfeld 展开。")
  ]));

  setTopic("quantum", "phonon", T("phonon", "讲义116-123页：声子与 Debye 热容", "讲义116-123页 / 考试要求13", "补充一维晶格振动正交关系、声子量子化、Debye 态密度和 T^3 热容。", "C_V\\propto T^3", [
    S("01 一维链正则模", [
      X("1.1", String.raw`H=\sum_l\frac{p_l^2}{2M}+\frac K2\sum_l(u_{l+1}-u_l)^2`, "一维单原子链 Hamiltonian。"),
      X("1.2", String.raw`u_l=\frac1{\sqrt N}\sum_q u_q e^{iqR_l}`, "用平面波正则模展开位移。"),
      X("1.3", String.raw`\sum_l e^{i(q-q')R_l}=N\delta_{q,q'}`, "正交关系让 q 和 q' 模解耦，这就是你截图中的排版形式。"),
      X("1.4", String.raw`T=\sum_q\frac{|p_q|^2}{2M}`, "动能在正则模中对角化。"),
      X("1.5", String.raw`\omega_q=2\sqrt{\frac KM}\left|\sin\frac{qa}{2}\right|`, "一维链色散。")
    ], ["正交关系是推导能否对角化的关键。"], "一维链声子。"),
    S("02 声子量子化", [
      X("2.1", String.raw`H=\sum_q\left(\frac{|p_q|^2}{2M}+\frac{M\omega_q^2}{2}|u_q|^2\right)`, "每个 q 模是独立谐振子。"),
      X("2.2", String.raw`H=\sum_q\hbar\omega_q\left(a_q^\dagger a_q+\frac12\right)`, "量子化后得到声子 Hamiltonian。"),
      X("2.3", String.raw`n_q=\frac1{e^{\beta\hbar\omega_q}-1}`, "声子是 Bose 准粒子，化学势为 0。")
    ], ["零点能不影响热容但存在。"], "声子 Hamiltonian。"),
    S("03 Debye 态密度", [
      X("3.1", String.raw`\omega=c_s k`, "低能声子线性色散。"),
      X("3.2", String.raw`g(\omega)d\omega=3\frac{V}{(2\pi)^3}4\pi k^2dk`, "三支声学支给因子 3。"),
      X("3.3", String.raw`g(\omega)=\frac{3V}{2\pi^2c_s^3}\omega^2`, "三维 Debye 态密度。"),
      X("3.4", String.raw`\int_0^{\omega_D}g(\omega)d\omega=3N`, "Debye cutoff 保证总模数为 3N。")
    ], ["ω² 态密度导致 T^3。"], "Debye cutoff。"),
    S("04 低温热容", [
      X("4.1", String.raw`U=\int_0^{\omega_D}d\omega\,g(\omega)\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}`, "声子热激发能量。"),
      X("4.2", String.raw`x=\frac{\hbar\omega}{k_BT}`, "换元提取温度幂次。"),
      X("4.3", String.raw`T\ll\Theta_D:\quad \int_0^\infty\frac{x^3}{e^x-1}dx=\frac{\pi^4}{15}`, "低温上限可延到无穷。"),
      X("4.4", String.raw`U\propto T^4,\qquad C_V\propto T^3`, "得到 Debye T^3 定律。"),
      X("4.5", String.raw`C_V\simeq\frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3`, "标准低温系数。")
    ], ["和理想 BEC 的 T^{3/2} 区分。"], "Debye T^3。")
  ]));

  setTopic("quantum", "emfield", T("emfield", "讲义124-127页：电磁场量子化、黑体辐射与相干态", "讲义124-127页 / 考试要求14", "补充 Coulomb 规范、横向光子、Planck 分布、辐射压强和相干态。", "u(T)=\\pi^2(k_BT)^4/(15\\hbar^3c^3)", [
    S("01 横向电磁场", [
      X("1.1", String.raw`\nabla\cdot\mathbf A=0`, "Coulomb 规范去掉纵向自由度。"),
      X("1.2", String.raw`\mathbf B=\nabla\times\mathbf A,\qquad \mathbf E=-\frac1c\frac{\partial\mathbf A}{\partial t}`, "用矢势表示自由辐射场。"),
      X("1.3", String.raw`\mathbf A(\mathbf r,t)=\sum_{\mathbf k\lambda}Q_{\mathbf k\lambda}(t)\mathbf e_{\mathbf k\lambda}e^{i\mathbf k\cdot\mathbf r}`, "把场展开成平面波模式。"),
      X("1.4", String.raw`\mathbf k\cdot\mathbf e_{\mathbf k\lambda}=0,\qquad \lambda=1,2`, "每个 k 只有两个横向偏振。")
    ], ["光子没有纵向偏振。"], "Coulomb 规范。"),
    S("02 光子 Hamiltonian", [
      X("2.1", String.raw`H=\frac12\int d^3r\,(\mathbf E^2+\mathbf B^2)`, "自由电磁场能量。"),
      X("2.2", String.raw`H=\sum_{\mathbf k\lambda}\hbar\omega_k\left(a_{\mathbf k\lambda}^\dagger a_{\mathbf k\lambda}+\frac12\right)`, "每个模式量子化为谐振子。"),
      X("2.3", String.raw`\omega_k=ck`, "光子线性色散。"),
      X("2.4", String.raw`n_{\mathbf k\lambda}=\frac1{e^{\beta\hbar\omega_k}-1}`, "光子数不守恒，所以 μ=0。")
    ], ["黑体辐射就是 μ=0 的光子 Bose 气。"], "光子量子化。"),
    S("03 黑体能量密度", [
      X("3.1", String.raw`g(\omega)d\omega=2\frac{V}{(2\pi)^3}4\pi k^2dk`, "两种偏振给因子 2。"),
      X("3.2", String.raw`g(\omega)=\frac{V}{\pi^2c^3}\omega^2`, "光子频率态密度。"),
      X("3.3", String.raw`U=\int_0^\infty d\omega\,g(\omega)\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}`, "每个光子模式能量乘占据数。"),
      X("3.4", String.raw`\frac UV=\frac{(k_BT)^4}{\pi^2\hbar^3c^3}\int_0^\infty dx\,\frac{x^3}{e^x-1}`, "换元 x=βℏω。"),
      X("3.5", String.raw`\int_0^\infty dx\,\frac{x^3}{e^x-1}=\frac{\pi^4}{15}`, "标准 Bose 积分。"),
      X("3.6", String.raw`\frac UV=\frac{\pi^2}{15}\frac{(k_BT)^4}{\hbar^3c^3}`, "得到 Stefan-Boltzmann T^4 标度。")
    ], ["不能只写 U∝T^4，要写出态密度积分。"], "黑体辐射。"),
    S("04 辐射压强", [
      X("4.1", String.raw`\Omega=k_BT\sum_{\mathbf k\lambda}\ln(1-e^{-\beta\hbar ck})`, "光子巨势。"),
      X("4.2", String.raw`\Omega=-\frac13U`, "分部积分得到巨势和能量关系。"),
      X("4.3", String.raw`P=-\Omega/V=\frac13\,U/V`, "辐射压强。")
    ], ["相对论无质量粒子满足 P=u/3。"], "P=u/3。"),
    S("05 相干态", [
      X("5.1", String.raw`a|\alpha\rangle=\alpha|\alpha\rangle`, "相干态是湮灭算符本征态。"),
      X("5.2", String.raw`|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^\infty\frac{\alpha^n}{\sqrt{n!}}|n\rangle`, "相干态按光子数态展开。"),
      X("5.3", String.raw`P(n)=e^{-|\alpha|^2}\frac{|\alpha|^{2n}}{n!}`, "光子数服从 Poisson 分布。"),
      X("5.4", String.raw`\langle n\rangle=|\alpha|^2,\qquad \frac{\Delta n}{\langle n\rangle}=\frac1{\sqrt{\langle n\rangle}}`, "强光场相对涨落小，接近经典波。")
    ], ["相干态是最接近经典电磁波的量子态。"], "相干态定义。")
  ]));
})();
