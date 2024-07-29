---
tags:
  - atom
  - math
---
![300|center](general-abs-value.excalidraw.svg)
The absolute value of $x$ ($|x|$) can be thought of as the distance of the number $x$ from 0 on the number line.
$$ |x| = \left\{\begin{array}{lr}
	x & x \ge 0 \\
	-x & x < 0
\end{array}\right.$$
- $|x| \ge 0$
- $\sqrt{x^2} = |x| \textcolor{gray}{\ne x}$
- $|x| < a \iff -a < x < a$
- $|x| > a \iff x < -a \text{ or } x > a$
	
> [!proof]-
> $$\left.\begin{array}{l}
> 	|x| < a \\
> 	\begin{array}{rcll}
> 		\text{If $x$ is positive } & & \text{If $x$ is negative} \\
> 		x < a & \text{or} & -x < a \\
> 		x < a & \text{or} & x > -a
> 	\end{array} \\
> 	-a < x < a
> \end{array}\hspace{1em}\right|\hspace{1em}
> \begin{array}{l}
> 	|x| > a \\
> 	\begin{array}{rcl}
> 		\text{If $x$ is positive } & & \text{If $x$ is negative} \\
> 		x > a & \text{or} & -x > a \\
> 		x > a & \text{or} & x < -a
> 	\end{array} \\
> 	x < -a \text{ or } x > a
> \end{array}
> $$