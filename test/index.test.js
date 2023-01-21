import {expect, server, BASE_URL} from './setup';

describe('Page Test - Index', () => {
  it('Tests Base URL Response and Body', (done) => {
    server
        .get(`${BASE_URL}/`)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(
              'Environment variable is coming across.',
          );
          done();
        });
  });
});
