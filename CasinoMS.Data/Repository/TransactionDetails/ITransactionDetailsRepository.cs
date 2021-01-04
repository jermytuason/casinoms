using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repository.TransactionDetails
{
    public interface ITransactionDetailsRepository
    {
        IEnumerable<TransactionDetailsViewModel> GetAllTransactionDetails();
        IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByTeam(string teamName);
        IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByUserId(Guid userId);
        IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByDates(string teamName, DateTime startDate, DateTime endDate);
        TransactionDetailsViewModel GetTransactionDetailsById(Guid transactionId);
        TransactionDetailsViewModel GetTransactionDetailsByReferenceNo(string referenceNo);
        void AddTransactionDetails(TransactionDetailsViewModel model);
        TransactionDetailsViewModel UpdateTransactionDetails(TransactionDetailsViewModel model);
        void DeleteTransactionDetails(Guid transactionId);
        bool Commit();

    }
}
