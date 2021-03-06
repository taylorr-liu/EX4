import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CurdApp from '../src/lib/curd_app-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CurdApp.ApiLambdaCrudDynamoDBStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
        "Resources": {}
    }, MatchStyle.EXACT));
});
