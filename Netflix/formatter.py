import fileinput

with open('logins.txt', 'r') as src:
    with open('login.txt', 'w') as dest:
       for line in src:
           dest.write('%s%s%s\n' % ("{\"", line.rstrip('\n'), "\"},"))

f = open('login.txt','r')
filedata = f.read()
f.close()

newdata = filedata.replace(":","\" : \"")

f = open('login.json','w')
f.write(newdata)
f.close()
