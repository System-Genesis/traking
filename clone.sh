cd reposClone
git clone https://github.com/System-Genesis/$1.git
cd $1
git checkout dev
npm i
cd ../
tar.exe -a -c -f $1.zip $1
rm -rf $1
