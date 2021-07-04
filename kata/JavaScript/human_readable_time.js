var humanReadable = s =>
[3600,60,1].map(v => (t=v, v=~~(s/t), s%=t, v>99?'99':('00'+v).slice(-2))).join(':')
