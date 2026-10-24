from pathlib import Path
from tempfile import TemporaryDirectory
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from servidor import SimulatorHandler
with TemporaryDirectory() as root:
 p=Path(root);(p/'index.html').write_text('test');(p/'docs').mkdir();(p/'docs/source.pdf').write_bytes(b'PDF test')
 for path,expected in [('/index.html',200),('/docs/source.pdf',200),('/.git/config',404),('/%2e%2e/private',404),('/docs/',404)]:
  h=object.__new__(SimulatorHandler);h.path=path;h.directory=root;h.headers={};h.request_version='HTTP/1.1';h.command='GET';codes=[];h.send_response=lambda code,*args:codes.append(code);h.send_error=lambda code,*args:codes.append(code);h.send_header=lambda *args:None;h.end_headers=lambda:None
  f=h.send_head()
  if f:f.close()
  assert codes[-1]==expected,(path,codes)
 assert SimulatorHandler.guess_type(h,'asset.js')=='text/javascript'
print('144 server PASS: local launcher assets and original documents served; traversal, repository paths and directory indexes refused; explicit JS MIME type. No preview server started.')
