var rot13 = message => message.replace(/[a-z]/gi, v => (String.fromCharCode(v.charCodeAt()+((v>((v>'_')?'m':'M'))? -13:13))))
