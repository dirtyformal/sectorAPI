import { expect, server, BASE_URL } from "./setup";

describe('Page Test - About', () => {
  it('Tests Output on /about', (done) => {
    server
        .get(`${BASE_URL}/about`)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(
              'Working!',
          );
          done();
        });
  });
});