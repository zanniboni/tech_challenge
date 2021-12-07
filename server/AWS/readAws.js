const aws = require("aws-sdk");
const config = require("./config.json");

async function readAws() {
  try {
    aws.config.setPromisesDependency();

    aws.config.update({
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      region: config.aws.region,
    });

    const s3 = new aws.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: "zanni-bucket",
      })
      .promise();

    console.log(response);
  } catch (e) {
    console.log("Erro: ", e);
  }
}

readAws();
