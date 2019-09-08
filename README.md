# Personal portfolio

---

To test it, simply:

```bash
git clone https://github.com/carmargut/portfolio.git
cd portfolio
docker build -t carmargut/portfolio .
docker run -p 443:443 -p 80:80 -d --name portfolio carmargut/portfolio


```