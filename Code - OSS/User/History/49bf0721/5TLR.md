---
tags:
  - math
  - atom
---
![600|center](incircle-proof2.excalidraw.svg)
$$\dfrac{\cot\frac{1}{2}\alpha}{s-a} = \dfrac{\cot\frac{1}{2}\beta}{s-b} = \dfrac{\cot\frac{1}{2}\gamma}{s-c} = \dfrac{1}{r}$$
where $r$ is the radius of the [[Incircles|incircle]], and $s$ is the [[Semiperimeter|semiperimeter]]. This is very similar in concept to the [[Law of Sines|law of sines / sine rule]].

> [!Proof]-
> ![600|center](incircle-proof0.excalidraw.svg)
> The points of tangency of the [[Incircles|incircle]] with the sides of the triangle break the perimeter into 6 segments, in 3 pairs such that the segments in each pair are of equal length. ![600|center](incircle-proof1.excalidraw.svg)
> If we pick one segment from we each pair, their sum will then always be the [[Semiperimeter|semiperimeter]], $s$; $s = {\color{BrickRed}R} + {\color{green}G} + {\color{Fuchsia}P}$. Using this and the relationship between the segments and the side lengths, we can solve for the segment lengths.
 > $$\begin{array}{lc|cl}
 > 	\begin{array}{l}
 > 		s = {\color{BrickRed}R} + {\color{green}G} + {\color{Fuchsia}P} \\
 > 		{\color{green}G} + {\color{Fuchsia}P} = a \\
 > 		{\color{BrickRed}R} + {\color{Fuchsia}P} = b \\
 > 		{\color{BrickRed}R} + {\color{green}G} = c \\
 > 		\phantom{\displaystyle\tiny\int}
 > 	\end{array}
 > 	&&&
 > 	\begin{align*}
 > 		(1)\hspace{1em} s &= {\color{BrickRed}R} + a \\
 > 		\color{BrickRed}R &= s - a \\
 > 		(2)\hspace{1em} s &= {\color{green}G} + b \\
 > 		\color{green}R &= s - b \\
 > 		(3)\hspace{1em} s &= {\color{Fuchsia}P} + c \\
 > 		\color{Fuchsia}P &= s - c \\
 > 	\end{align*}
 > \end{array}$$
> ![600|center](incircle-proof2.excalidraw.svg)
> Drawing lines from the vertices to the [[Incircles|incenter]] forms 6 right angle triangles (one for each segment). These lines are internal angle bisectors, so if $\alpha$, $\beta$, and $\gamma$ are the internal angles opposite $a$, $b$, and $c$ respectively (or adjacent to $s-a$, $s-b$, and $s-c$ respectively), then the following triangles form.
> ![600|center](incircle-proof3.excalidraw.svg)
> The definition of the cotangent function ($\frac{A}{O}$) rearranged in to form $\dfrac{\cot\theta}{A} = \dfrac{1}{O}$ gives the final law of cotangents.
> $$\dfrac{\cot\frac{1}{2}\alpha}{s-a} = \dfrac{\cot\frac{1}{2}\beta}{s-b} = \dfrac{\cot\frac{1}{2}\gamma}{s-c} = \dfrac{1}{r} \hspace{1em} \square$$
> \[[Wikipedia Proof](https://en.wikipedia.org/wiki/Law_of_cotangents#Proof)\]