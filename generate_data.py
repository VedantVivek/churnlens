import pandas as pd, numpy as np
from faker import Faker
import random
from datetime import timedelta

fake = Faker()
n = 8000
rows = []

for i in range(n):
    signup_date = fake.date_between(start_date='-180d', end_date='today')
    channel = random.choices(['App','Web','Referral'], weights=[50,35,15])[0]
    activated = random.random() < 0.65
    activation_date = signup_date + timedelta(days=random.randint(0,3)) if activated else None
    total_txn = np.random.poisson(3) if activated else 0
    churned = random.random() < (0.35 if activated else 0.8)
    last_active = signup_date + timedelta(days=random.randint(1,60))
    feedback = random.randint(1,5) if total_txn > 0 else None

    rows.append([i, signup_date, channel, activated, activation_date,
                 last_active, total_txn, churned, feedback])

df = pd.DataFrame(rows, columns=['user_id','signup_date','signup_channel',
    'activation_flag','activation_date','last_active_date',
    'total_transactions','churn_flag','feedback_score'])

df.to_csv('users.csv', index=False)
print(df.head())