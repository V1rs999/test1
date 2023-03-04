import hashlib
import random
import time


def find_hash(hash_algorithm, msg, zero):
    time_current = time.time()
    nonce = 0
    while True:

        nonce += 1
        message_with_nonce_and_salt = msg.encode() + str(nonce).encode()
        hash_value = hash_algorithm(message_with_nonce_and_salt).hexdigest()
        if hash_value .startswith('0' * zero):
            time_end = time.time()
            time_diff = time_end - time_current
            print(f"Seconds: {str(time_diff)}\n")
            return hash_value
	


def merkle_tree(tx_hashes, zeros):
    if len(tx_hashes) == 1:
        return tx_hashes[0]

    if len(tx_hashes) % 2 != 0:
        tx_hashes.append(tx_hashes[-1])

    new_tx_hashes = []
    for i in range(0, len(tx_hashes), 2):
        tx_pair = tx_hashes[i] + tx_hashes[i + 1]
        print("i: ", tx_pair)
        tx_hash = find_hash(hashlib.sha256, tx_pair, zeros)
        new_tx_hashes.append(tx_hash)

    return merkle_tree(new_tx_hashes, zeros)


if __name__ == '__main__':
    num_transactions = 23
    transactions = ["".join([chr(random.randint(65, 90)) for j in range(10)]) for i in range(num_transactions)]

    print("Transactions 1:")
    print(transactions)

    merkle_root = merkle_tree(transactions, 4)
    print("\nMerkle root 1:")
    print(merkle_root)

    transactions[2] = "safsafsafsa"

    print("Transactions 2:")
    print(transactions)

    merkle_root = merkle_tree(transactions, 4)
    print("\nMerkle root 2:")
    print(merkle_root)